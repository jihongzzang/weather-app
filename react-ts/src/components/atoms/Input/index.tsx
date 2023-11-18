import styled from 'styled-components';

interface StyledInputProps extends React.ComponentPropsWithoutRef<'input'> {
  $darkmode?: boolean;
}

const StyledInput = styled.input<StyledInputProps>``;

export default StyledInput;
