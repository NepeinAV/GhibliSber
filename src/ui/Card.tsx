import React, { FC } from 'react';

import styled from 'styled-components/native';

import Box, { BoxProps } from './Box';

type CardProps = BoxProps;

const CardContainer: FC<CardProps> = ({ children, ...other }) => {
    return <Box {...other}>{children}</Box>;
};

const Card = styled(CardContainer)`
    border-radius: ${props => props.theme.borderRadius}px;
    background-color: ${props => props.theme.colors.secondary};
    ${props => props.theme.shadows.primary}
    padding: ${props => props.theme.indents.padding}px;
`;

export default Card;
