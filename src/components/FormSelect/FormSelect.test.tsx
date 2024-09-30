import { render, screen, fireEvent } from '@testing-library/react';
import { Formik } from 'formik';
import { FormSelect, FormSelectProps } from '.';

const MockFormSelect = (props: FormSelectProps) => (
  <Formik initialValues={{ select: '' }} onSubmit={() => {}}>
    <FormSelect {...props} />
  </Formik>
);

describe('FormSelect Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('renders the select component with label and options', () => {
    render(
      <MockFormSelect
        label="Select an option"
        options={options}
        name="select"
      />
    );

    expect(screen.getByText(/select an option/i)).toBeInTheDocument();

    expect(
      screen.getByRole('option', { name: /selecione\.\.\./i })
    ).toBeInTheDocument();

    options.forEach((option) => {
      expect(
        screen.getByRole('option', { name: option.label })
      ).toBeInTheDocument();
    });
  });

  it('changes the value of the select', () => {
    render(
      <MockFormSelect
        label="Select an option"
        options={options}
        name="select"
      />
    );

    const selectElement = screen.getByText(/Selecione/i) as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: 'option1' } });

    expect(selectElement.value).toBe('option1');
  });
});
