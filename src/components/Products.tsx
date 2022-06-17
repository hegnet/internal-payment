import {Product} from "../models/Product";
import ProductCard from "./ProductCard";
import {Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import Header from "./Header";
import {getProducts} from "../service/firebase";

export default function Products() {
    const [price, setPrice] = useState(0)
    const [priceMap, setPriceMap] = useState(new Map<number, number>())
    const updatePriceMap = (k: number, v: number) => {
        setPriceMap(priceMap.set(k, v));
        updatePrice()
    }
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts.then(res => {
            setProducts(res)
        })
    }, [])

    function incQuantity(newPrice: number) {
        let oldQuantity = priceMap.get(newPrice)
        if (oldQuantity !== undefined) {
            updatePriceMap(newPrice, oldQuantity + 1)
        } else {
            updatePriceMap(newPrice, 1)
        }
    }

    function decQuantity(newPrice: number) {
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

    return (
        <Stack>
            <Header price={price}/>
            <Stack m={4} mt={8} spacing={3}>
                {products && products.map(pro => {
                    return <ProductCard name={pro.name} category={pro.category} price={pro.price}
                                        description={pro.description}
                                        decPrice={decQuantity} incPrice={incQuantity}
                    />
                })}
            </Stack>
        </Stack>
    );
}