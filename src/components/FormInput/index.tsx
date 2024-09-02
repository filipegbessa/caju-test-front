import { FC, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { applyMask } from '~/utils';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask?: 'cpf';
}

export const FormInput: FC<FormInputProps> = ({ label, mask, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <Field name={props.name}>
        {({ field, form }: FieldProps) => (
          <input
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
        {(message) => (
          <div style={{ color: 'red', marginTop: '4px' }}>{message}</div>
        )}
      </ErrorMessage>
    </div>
  );
};
