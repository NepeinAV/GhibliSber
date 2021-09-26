import React, { FC, ReactNode, useCallback, useState } from 'react';
import { NativeSyntheticEvent, ScrollView, TextLayoutEventData } from 'react-native';
import { css } from 'styled-components/native';
import Typography from './Typography';

type ShowMoreTextProps = {
    numOfLines: number;
    renderShowMoreButton: () => ReactNode;
    isTextExpanded: boolean;
    onTextMeasured?: () => void;
};

const ShowMoreText: FC<ShowMoreTextProps> = ({ numOfLines, renderShowMoreButton, isTextExpanded, children }) => {
    const [textLayout, setTextLayout] = useState<TextLayoutEventData | null>(null);

    const handleText = useCallback((e: NativeSyntheticEvent<TextLayoutEventData>) => setTextLayout(e.nativeEvent), []);

    return (
        <>
            <ScrollView
                css={css`
                    height: 0;
                    max-height: 0;
                `}
            >
                <Typography onTextLayout={handleText}>{children}</Typography>
            </ScrollView>

            <Typography
                numberOfLines={textLayout ? (isTextExpanded ? textLayout.lines.length : numOfLines) : undefined}
            >
                {children}
            </Typography>

            {textLayout && textLayout.lines.length > numOfLines && renderShowMoreButton()}
        </>
    );
};

export default ShowMoreText;
