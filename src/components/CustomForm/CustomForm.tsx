import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { InputForm } from './components';
import { schema, type FormValues } from './models/form.models';

export const CustomForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name="name"
        control={control}
        label="Name"
        type="text"
        error={errors.name}
      />
      <InputForm
        name="email"
        control={control}
        label="Email"
        type="email"
        error={errors.email}
      />
      <InputForm
        name="password"
        control={control}
        label="Password"
        type="password"
        error={errors.password}
      />
      <InputForm
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        type="password"
        error={errors.confirmPassword}
      />
      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Submit'}
      </button>
    </form>
  );
};
