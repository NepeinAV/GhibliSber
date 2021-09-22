import React, { FC } from 'react';

import styled from 'styled-components/native';

const StyledCardContainer = styled.View`
    padding: ${props => props.theme.indents.padding}px;
    border-radius: ${props => props.theme.borderRadius}px;
    background-color: white;
    ${props => props.theme.shadows.primary}
`;

const Card: FC = ({ children, ...other }) => {
    return <StyledCardContainer {...other}>{children}</StyledCardContainer>;
};

export default Card;
