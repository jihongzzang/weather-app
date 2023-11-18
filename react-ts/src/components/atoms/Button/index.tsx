import styled from 'styled-components';

interface StyledButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  $darkmode?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  transition: 0.4s ease;
`;

export default StyledButton;
