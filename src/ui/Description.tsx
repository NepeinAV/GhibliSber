import React, { FC } from 'react';

import { css, useTheme } from 'styled-components/native';

import Box from './Box';
import Spacer from './Spacer';
import Typography from './Typography';

type DescriptionProps = {
    title: string;
};

const Description: FC<DescriptionProps> = ({ children, title }) => {
    const theme = useTheme();

    return (
        <Box
            css={css`
                flex-direction: row;
            `}
        >
            <Typography
                css={css`
                    font-weight: 700;
                `}
            >
                {title}:
            </Typography>

            <Spacer width={theme.indents.margin / 4} />

            <Typography>{children}</Typography>
        </Box>
    );
};

export default Description;
