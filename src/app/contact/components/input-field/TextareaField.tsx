import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import {
   Textarea,
   Label,
   InputContainer,
   ErrorMessage,
} from './InputFieldStyled';

interface TextareaFieldProps {
   placeholder: string;
   registration: UseFormRegisterReturn;
   error?: FieldError;
   textareaName: string;
}

export const TextareaField: FC<TextareaFieldProps> = ({
   placeholder,
   registration,
   error,
   textareaName,
}) => {
   return (
      <div>
         <InputContainer>
            <Label>{textareaName}</Label>
            <Textarea placeholder={placeholder} {...registration} />
         </InputContainer>
         <ErrorMessage>{error?.message}</ErrorMessage>
      </div>
   );
};
