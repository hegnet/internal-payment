import {AppBar, Box, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import React from "react";
import {ShoppingCartCheckout} from "@mui/icons-material";
import {getProducts} from "../service/firebase";

export type HeaderProps = {
    price: number
}

export default function Header({price}: HeaderProps) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Stack
                        flexGrow={1}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        pl={3} pr={3}>
                        <Typography variant="h5">
                            {price.toFixed(0)},-
                        </Typography>
                        <IconButton
                            disabled={price === 0}
                            size="large"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.mobilepay.dk/erhverv/betalingslink/betalingslink-svar?phone=884460&amount=${price.toFixed(0)}&comment=Bartender&lock=1`}
                        >
                            <ShoppingCartCheckout/>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}