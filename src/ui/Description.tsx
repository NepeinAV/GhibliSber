import React, { FC } from 'react';

import styled, { useTheme } from 'styled-components/native';

import Box from './Box';
import Spacer from './Spacer';
import Typography from './Typography';

type DescriptionProps = {
    title: string;
};

const Container = styled(Box)`
    flex-direction: row;
`;

const Title = styled(Typography)`
    font-weight: 700;
`;

const Description: FC<DescriptionProps> = ({ children, title }) => {
    const theme = useTheme();

    return (
        <Container>
            <Title>{title}:</Title>

            <Spacer width={theme.indents.margin / 4} />

            <Typography>{children}</Typography>
        </Container>
    );
};

export default Description;
