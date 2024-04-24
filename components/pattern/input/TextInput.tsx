import React from 'react';
import { BaseInput, Typography } from '@/components/common';
import { BaseComponentProps } from '@/type';

type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    label?: string | React.ReactNode;
} & BaseComponentProps;

const TextInput: React.FC<TextInputProps> = ({ value, onChange, label }) => {
    return (
        <div className="flex flex-col gap-4">
            {label ? <Typography>{label}</Typography> : null}
            <BaseInput
                type="text"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.value);
                }}
            />
        </div>
    );
};

export default TextInput;
