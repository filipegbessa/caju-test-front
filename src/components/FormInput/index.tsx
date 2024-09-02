import { FC, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { applyMask } from '~/utils';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  mask?: 'cpf';
  isField?: boolean;
  errorMessage?: string;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  mask,
  isField = true,
  errorMessage,
  ...props
}) => {
  const content = isField ? (
    <>
      <Field name={props.name}>
        {({ field, form }: FieldProps) => (
          <input
            className="cj-input"
            {...field}
            {...props}
            value={applyMask(field.value, mask)}
            onChange={(e) => {
              const maskedValue = applyMask(e.target.value, mask);
              form.setFieldValue(props.name as string, maskedValue);
            }}
          />
        )}
      </Field>
      <ErrorMessage name={props.name as string}>
        {(message) => <div className="cj-error-input">{message}</div>}
      </ErrorMessage>
    </>
  ) : (
    <>
      <input
        {...props}
        value={applyMask(props.value as string, mask)}
        className="cj-input"
        data-testid="TextField"
      />
      {errorMessage && <div className="cj-error-input">{errorMessage}</div>}
    </>
  );
  return (
    <div>
      {label && <label>{label}</label>}
      {content}
    </div>
  );
};
