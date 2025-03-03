import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { ErrorMessage, Input, InputContainer, Label } from './InputFieldStyled';

interface InputFieldProps {
   type: string;
   placeholder: string;
   registration: UseFormRegisterReturn;
   error?: FieldError;
   inputName: string;
}

export const InputField: FC<InputFieldProps> = ({
   type,
   placeholder,
   registration,
   error,
   inputName,
}) => {
   return (
      <div>
         <InputContainer>
            <Label>{inputName}</Label>
            <Input type={type} placeholder={placeholder} {...registration} />
         </InputContainer>
         <ErrorMessage>{error?.message}</ErrorMessage>
      </div>
   );
};
