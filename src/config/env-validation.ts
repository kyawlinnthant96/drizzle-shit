import { z } from 'zod';
import "dotenv/config"

const EnvSchema = z.object({
  DATABASE_URL: z.string({
      description: 'Postgres DB Connection string',
      required_error: '😱 You forgot to add a database URL',
    })
    .url()
    .min(3),
  NODE_ENV: z.enum(
    [
      'development',
      'production',
    ],
    {
      description: 'This gets updated depending on your environment',
    }
  ).default('development'),
  PORT: z.coerce
    .number({
      description: '.env files convert numbers to strings, therefoore we have to enforce them to be numbers',
    })
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(3000),
});

export const env = EnvSchema.parse(process.env);