import React, { FC } from 'react';
import { TextProps } from 'react-native';
import { FlattenSimpleInterpolation } from 'styled-components';

import styled, { css } from 'styled-components/native';

type TypographyProps = {
    type?: TypographyTypes;
};

type TypographyTypes = 'regular' | 'title';

const RegularTypography = css`
    font-size: 14px;
    font-weight: 400;
`;

const TitleTypography = css`
    font-size: 18px;
    font-weight: bold;
`;

const typographyTypeMap: Record<TypographyTypes, FlattenSimpleInterpolation> = {
    regular: RegularTypography,
    title: TitleTypography,
};

const StyledText = styled.Text<Required<TypographyProps>>`
    ${props => typographyTypeMap[props.type]}
`;

const Typography: FC<TextProps & TypographyProps> = ({ type = 'regular', ...other }) => {
    return <StyledText type={type} {...other} />;
};

export default Typography;
