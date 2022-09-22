import React from 'react'
// import Button from '@mui/material/Button';
import { Button } from '@mui/material';

export default function CommonButton ({ children, classes, color, size, sx, variant }: any) {
    return (
        <Button
            classes={classes}
            color={color}
            size={size}
            sx={sx}
            variant={variant}
        >
            {children}
        </Button>
    )
}
