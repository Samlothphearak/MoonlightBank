import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'
import { z } from 'zod'

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
    control={control}
    name={name}
    render={({ field, fieldState }) => ( // Destructure fieldState to access error state
        <div className='form-item mb-4'> {/* Add margin for spacing */}
            <FormLabel htmlFor={name} className='text-sm font-semibold text-gray-700'> {/* Style for label */}
                {label}
            </FormLabel>
            <div className="flex w-full flex-col">
                <FormControl>
                    <input
                        id={name} // Add ID for accessibility
                        placeholder={placeholder}
                        className={`input-class border rounded-md p-2 ${fieldState.error ? 'border-red-500' : 'border-gray-300'} transition duration-200`} // Apply dynamic classes
                        type={name === 'password' ? 'password' : 'text'}
                        {...field} // Spread field props to connect with react-hook-form
                    />
                </FormControl>
                <FormMessage className='form-message mt-2 text-red-600'>
                    {fieldState.error ? fieldState.error.message : null} {/* Display error message */}
                </FormMessage>
            </div>
        </div>
    )}
/>

        
    );
}

export default CustomInput;


