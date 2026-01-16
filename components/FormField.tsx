"use client"

import { Input } from "@/components/ui/input"
import { FieldValues, Path, Control } from 'react-hook-form'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField as ShadcnFormField,
} from "@/components/ui/form"

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
}: FormFieldProps<T>) => (
  <ShadcnFormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" placeholder={placeholder} type={type} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormField