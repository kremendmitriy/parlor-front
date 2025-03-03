import { useForm } from 'react-hook-form';
import { FormContainer } from './FormComponentStyled';
import Button from '@/app/(components)/button/button';
import { useSubmitForm } from '@/app/(hooks)/useSubmitForm';
import { InputField } from '../input-field/InputField';
import { TextareaField } from '../input-field/TextareaField';
import { FormData } from '@/app/(types)/form-types/FormData';

export const FormComponent = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<FormData>({
      mode: 'onChange',
   });

   const { isSuccess, onSubmit } = useSubmitForm();

   return (
      <FormContainer>
         {isSuccess ? (
            <p style={{ color: 'green', fontSize: '18px' }}>
               Thank you for your message! You will be redirected to the
               homepage in a few seconds.
            </p>
         ) : (
            <form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
               <InputField
                  type="text"
                  placeholder="Full Name..."
                  inputName="Full Name"
                  registration={register('name', {
                     required: 'This field is required',
                     minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters',
                     },
                     maxLength: {
                        value: 50,
                        message: 'Name must not exceed 50 characters',
                     },
                  })}
                  error={errors.name}
               />

               <InputField
                  type="text"
                  placeholder="Email..."
                  inputName="Email"
                  registration={register('email', {
                     required: 'This field is required',
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                     },
                  })}
                  error={errors.email}
               />

               <InputField
                  type="text"
                  placeholder="Phone No..."
                  inputName="Phone No"
                  registration={register('phone', {
                     required: 'This field is required',
                     pattern: {
                        value: /^[0-9]{10,20}$/,
                        message: 'Phone number must be 10-20 digits',
                     },
                  })}
                  error={errors.phone}
               />

               <TextareaField
                  placeholder="Enter your message..."
                  textareaName="Message"
                  registration={register('message', {
                     required: 'This field is required',
                     minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                     },
                     maxLength: {
                        value: 255,
                        message: 'Message must not exceed 255 characters',
                     },
                  })}
                  error={errors.message}
               />
               <Button
                  type="submit"
                  disabled={isSubmitting}
                  width="175px"
                  height="75px"
                  fontSize="20px"
               >
                  {isSubmitting ? 'Sending...' : 'Submit'}
               </Button>
            </form>
         )}
      </FormContainer>
   );
};
