import styled from 'styled-components';

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'childern'>;

const Text = <C extends React.ElementType>({
  as,
  children,
  $darkmode,
  ...rest
}: TextProps<C>) => {
  const Component = as || 'span';

  return (
    <Component $darkmode={$darkmode} {...rest}>
      {children}
    </Component>
  );
};

const StyledText = styled(Text)((props) => {
  const { theme } = props;

  return {
    color: theme.textColor,
    transition: '0.4s ease',
  };
});

export default StyledText;
