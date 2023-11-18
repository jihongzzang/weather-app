import styled from 'styled-components';

import { RenderType } from '@/components/WeatherApp/types';

export interface StyledDivProps extends React.ComponentPropsWithRef<'div'> {
  $rendertype?: RenderType;
  $darkmode?: boolean;
}

const StyledDiv = styled.div<StyledDivProps>``;

export default StyledDiv;
