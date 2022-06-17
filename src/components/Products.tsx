import {mockProducts} from "../models/Product";
import ProductCard from "./ProductCard";
import {Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Header from "./Header";

export default function Products() {
    const [price, setPrice] = useState(0)
    const [priceMap, setPriceMap] = useState(new Map<number, number>())
    const updatePriceMap = (k: number, v: number) => {
        setPriceMap(priceMap.set(k, v));
        updatePrice()
    }

    function incPrice(newPrice: number) {
        let oldQuantity = priceMap.get(newPrice)
        console.log(oldQuantity);
        if (oldQuantity !== undefined) {
            updatePriceMap(newPrice, oldQuantity + 1)
        } else {
            updatePriceMap(newPrice, 1)
        }
    }

    function decPrice(newPrice: number) {
        let oldQuantity = priceMap.get(newPrice)
        if (oldQuantity !== undefined) {
            updatePriceMap(newPrice, oldQuantity - 1)
        } else {
            throw new Error("Key not found")
        }
    }

    function updatePrice() {
        let sum = 0;
        priceMap.forEach((v, k) => {
            sum += (k * v);
        });
        setPrice(sum)
    }

    useEffect(() =>
    {
        console.log(price);
    },[price])

    return (
        <Stack>
            <Header price={price}/>
            <Stack m={4} mt={8} spacing={3}>
                {mockProducts.map(pro => {
                    return <ProductCard name={pro.name} category={pro.category} price={pro.price}
                                        description={pro.description} id={pro.id}
                                        decPrice={decPrice} incPrice={incPrice}
                    />
                })}
            </Stack>
        </Stack>
    );
}