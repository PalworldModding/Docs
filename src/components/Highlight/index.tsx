import React from 'react';

export type HighlightProps = {
    children: React.ReactNode;
    color: string;
};

export default function Index({children, color} : HighlightProps) {
    return (
        <span
            style={{
                backgroundColor: color,
                borderRadius: '2px',
                color: '#000',
                padding: '0.2rem',
            }}>
        {children}
    </span>
    );
}