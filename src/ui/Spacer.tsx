import React, { FC } from 'react';

import { css } from 'styled-components/native';

import Box from './Box';

type SpacerProps = {
    width?: number;
    height?: number;
};

const Spacer: FC<SpacerProps> = ({ width = 0, height = 0 }) => {
    return (
        <Box
            css={css`
                width: ${width}px;
                height: ${height}px;
            `}
        />
    );
};

export default Spacer;
