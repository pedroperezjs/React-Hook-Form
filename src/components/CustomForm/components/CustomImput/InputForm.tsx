import { Controller, type Control, type FieldError } from 'react-hook-form';
import type { FormValues } from '../../models/form.models';
import './InputForm.css';

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

export const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? 'is-invalid' : ''}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        )}
      />
      {error && (
        <p
          id={`${name}-error`}
          className="error"
        >
          {error.message}
        </p>
      )}
    </div>
  );
};
