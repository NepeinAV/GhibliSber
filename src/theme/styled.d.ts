import { FlattenSimpleInterpolation } from 'styled-components';
import type {} from 'styled-components/cssprop';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: number;
        colors: {
            primary: string;
            secondary: string;
        };
        indents: {
            padding: number;
            margin: number;
        };
        shadows: {
            primary: FlattenSimpleInterpolation;
        };
    }
}
