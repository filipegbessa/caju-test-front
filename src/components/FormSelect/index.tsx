import { FC, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field } from 'formik';

interface FormSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: { value: string; label: string }[];
}

export const FormSelect: FC<FormSelectProps> = ({
  label,
  options,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <Field as="select" {...props}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name as string}>
        {(mensagens) => (
          <div style={{ color: 'red', marginTop: '4px' }}>{mensagens}</div>
        )}
      </ErrorMessage>
    </div>
  );
};
