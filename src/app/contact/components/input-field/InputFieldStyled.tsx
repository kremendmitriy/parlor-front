import styled from 'styled-components';

export const InputContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
`;

export const Label = styled.label`
   font-family: 'Montserrat', sans-serif;
   font-size: 17px;
   font-weight: 700;
   margin-right: 15px;
   width: 100px;
   color: #ffffff;
`;

export const Input = styled.input`
   flex-grow: 1;
   padding: 5px;
   border: 1px solid #cccccc;
   border-radius: 4px;
   font-size: 16px;
   box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
   box-sizing: border-box;
   max-width: 500px;

   &:focus {
      border-color: #2e2e2e;
      outline: none;
      box-shadow: 0 0 5px rgba(46, 46, 46, 0.5);
   }
`;

export const Textarea = styled.textarea`
   flex-grow: 1;
   height: 200px;
   padding: 5px;
   border: 1px solid #cccccc;
   border-radius: 4px;
   font-size: 16px;
   box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
   box-sizing: border-box;
   max-width: 500px;
   resize: none;

   &:focus {
      border-color: #2e2e2e;
      outline: none;
      box-shadow: 0 0 5px rgba(46, 46, 46, 0.5);
   }
`;

export const ErrorMessage = styled.p`
   color: #ff0000;
   margin-left: 205px;
   margin-bottom: 20px;
   font-size: 14px;
   height: 20px;
   transition: opacity 0.3s ease;
   opacity: ${(props) => (props.children ? 1 : 0)};
`;
