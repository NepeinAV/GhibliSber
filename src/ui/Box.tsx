import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export type BoxProps = ViewProps;

const StyledView = styled.View``;

const Box: FC<BoxProps> = props => {
    return <StyledView {...props} />;
};

export default Box;
