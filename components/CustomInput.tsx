import React from 'react';
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form';
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';

const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <div className='form-item mb-4'>
                    <FormLabel htmlFor={name} className='text-sm font-semibold text-gray-700'>
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <input
                                id={name}
                                placeholder={placeholder}
                                className={`input-class border rounded-md p-2 transition duration-200 ${fieldState.error ? 'border-red-500' : 'border-gray-300'}`}
                                type={name === 'password' ? 'password' : 'text'}
                                {...field} // Connect with react-hook-form
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-2 text-red-600'>
                            {fieldState.error ? fieldState.error.message : null}
                        </FormMessage>
                    </div>
                </div>
            )}
        />
    );
}

export default CustomInput;