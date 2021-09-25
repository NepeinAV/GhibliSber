import { FlattenSimpleInterpolation } from 'styled-components';
import type {} from 'styled-components/cssprop';

declare type Colors = 'primary' | 'secondary' | 'background' | 'surface' | 'rating' | 'text';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: number;
        colors: Record<Colors, string>;
        indents: {
            padding: number;
            margin: number;
        };
        shadows: {
            primary: FlattenSimpleInterpolation;
        };
    }
}
