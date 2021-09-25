import React, { FC } from 'react';
import { TextProps } from 'react-native';
import { FlattenSimpleInterpolation } from 'styled-components';

import styled, { css } from 'styled-components/native';

import { Colors } from '../theme/styled';

type TypographyProps = {
    type?: TypographyTypes;
    color?: Colors;
};

type TypographyTypes = 'caption' | 'regular' | 'title';

const CaptionTypography = css`
    font-size: 10px;
    font-weight: 400;
`;

const RegularTypography = css`
    font-size: 15px;
    font-weight: 400;
`;

const TitleTypography = css`
    font-size: 18px;
    font-weight: bold;
`;

const typographyTypeMap: Record<TypographyTypes, FlattenSimpleInterpolation> = {
    caption: CaptionTypography,
    regular: RegularTypography,
    title: TitleTypography,
};

const StyledText = styled.Text<Required<TypographyProps>>`
    ${props => typographyTypeMap[props.type]}
    color: ${props => props.theme.colors[props.color]};
`;

const Typography: FC<TextProps & TypographyProps> = ({ type = 'regular', color = 'text', ...other }) => {
    return <StyledText type={type} color={color} {...other} />;
};

export default Typography;
