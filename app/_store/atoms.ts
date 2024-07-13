'use client'
import { atom } from "recoil";

export const brandFilter = atom({
    key: 'brand',
    default: [],
})

export const priceFilter = atom({
    key: 'price',
    default: 'All',
})

export const openCart = atom({
    key: 'cart',
    default: false
});

