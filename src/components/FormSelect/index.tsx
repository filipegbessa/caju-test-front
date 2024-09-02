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
      <Field as="select" {...props} className="cj-input">
        <option value="">Selecione...</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name as string}>
        {(mensagens) => <div className="cj-error-input">{mensagens}</div>}
      </ErrorMessage>
    </div>
  );
};
