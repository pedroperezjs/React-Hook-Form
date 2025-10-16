import { z } from 'zod';

export const schema = z
  .object({
    name: z
      .string()
      .min(2, 'El nombre debe tener al menos 2 caracteres.')
      .max(50, 'El nombre no puede superar los 50 caracteres.'),
    email: z.string().email('Ingresa un correo electrónico válido.'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword'],
  });

export type FormValues = z.infer<typeof schema>;
