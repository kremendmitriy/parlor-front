import { StyledButton } from './button.styled';

interface ButtonProps {
   className?: string;
   type?: 'button' | 'submit' | 'reset';
   width?: string;
   height?: string;
   disabled?: boolean;
   onClick?: () => void;
   children: React.ReactNode;
   fontSize?: string;
}

const Button: React.FC<ButtonProps> = ({
   className,
   onClick,
   children,
   ...rest
}) => {
   return (
      <StyledButton className={className} onClick={onClick} {...rest}>
         {children}
      </StyledButton>
   );
};

export default Button;
