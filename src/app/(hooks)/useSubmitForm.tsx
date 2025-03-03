import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormData } from '../(types)/form-types/FormData';

export const useSubmitForm = () => {
   const [isSuccess, setIsSuccess] = useState<boolean>(false);
   const router = useRouter();

   const onSubmit = async (data: FormData, reset: () => void) => {
      try {
         const response = await fetch(
            'http://localhost:5000/contact-form/send',
            {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
            }
         );

         if (response.ok) {
            setIsSuccess(true);
            alert('Message sent successfully!');
            reset();

            setTimeout(() => {
               router.push('/');
            }, 5000);
         } else {
            throw new Error('Failed to send the message');
         }
      } catch (error) {
         alert('An error occurred while sending the message.');
         console.error(error);
      }
   };

   return { isSuccess, onSubmit };
};
