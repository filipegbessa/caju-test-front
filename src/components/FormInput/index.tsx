import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { applyMask } from '~/utils';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  mask?: 'cpf';
  isField?: boolean;
  errorMessage?: string;
}

const LabeledInput: FC<{ label?: string; children: ReactNode }> = ({
  label,
  children,
}) => (
  <div>
    {label && <label>{label}</label>}
    {children}
  </div>
);

const MaskedInput: FC<
  InputHTMLAttributes<HTMLInputElement> & { mask?: 'cpf' }
> = ({ value, onChange, mask, ...props }) => (
  <input
    {...props}
    value={applyMask(value as string, mask)}
    className="cj-input"
    data-testid="FormInput"
    onChange={(e) => {
      const maskedValue = applyMask(e.target.value, mask);
      if (onChange)
        onChange({ ...e, target: { ...e.target, value: maskedValue } });
    }}
  />
);

const FieldInput: FC<
  InputHTMLAttributes<HTMLInputElement> & { name: string; mask?: 'cpf' }
> = ({ name, mask, ...props }) => (
  <>
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <MaskedInput
          {...field}
          {...props}
          mask={mask}
          onChange={(e) => form.setFieldValue(name, e.target.value)}
        />
      )}
    </Field>
    <ErrorMessage name={name}>
      {(message) => <div className="cj-error-input">{message}</div>}
    </ErrorMessage>
  </>
);

export const FormInput: FC<FormInputProps> = ({
  label,
  mask,
  isField = true,
  errorMessage,
  ...props
}) => (
  <LabeledInput label={label}>
    {isField ? (
      <FieldInput name={props.name as string} mask={mask} {...props} />
    ) : (
      <>
        <MaskedInput {...props} mask={mask} />
        {errorMessage && <div className="cj-error-input">{errorMessage}</div>}
      </>
    )}
  </LabeledInput>
);
