import React, {useState} from 'react';
import {Card, CardContent, IconButton, Stack, Typography} from "@mui/material";
import {Product} from "../models/Product";
import {AddBox, IndeterminateCheckBox} from "@mui/icons-material";

export default function ProductCard({name, category, price, description, decPrice, incPrice}: Product) {
    const [quantity, setQuantity] = useState(0)

    function addQuantity() {
        incPrice(price)
        setQuantity(quantity + 1)
    }

    function subQuantity() {
        if (quantity > 0) {
            decPrice(price)
            setQuantity(quantity - 1)
        }
    }

    return (
        <Card>
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Stack
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                        spacing={0.5}
                    >
                        <Typography variant={'h5'}>{name}</Typography>
                        <Typography>{description}</Typography>
                        <Typography color={'error.dark'} variant={'h6'}>{price},-</Typography>
                    </Stack>
                        <Stack
                            direction="row-reverse"
                            justifyContent="space-evenly"
                            alignItems="center"
                            spacing={0.5}
                        >
                            <IconButton color={'primary'}>
                                <AddBox onClick={addQuantity} sx={{width: 40, height: 40}}/>
                            </IconButton>
                            {quantity !== 0 && <Typography>{quantity}</Typography>}
                            {quantity !== 0 && <IconButton disabled={quantity === 0} color={'primary'}>
                                <IndeterminateCheckBox onClick={subQuantity} sx={{width: 40, height: 40}}/>
                            </IconButton>}
                        </Stack>
                </Stack>

            </CardContent>
        </Card>
    );
}
