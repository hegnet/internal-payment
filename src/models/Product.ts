

export type Product = {
    id: number,
    description: string,
    name: string,
    category: string,
    price: number,
    incPrice?: any,
    decPrice?: any
}

export let mockProducts : Product[] = [{
    "id": 1,
    "name": "Fadøl",
    "price": 11.38,
    "category": "Øl",
    "description": "Bajer"
}, {
    "id": 2,
    "name": "Normal drink",
    "price": 11.9,
    "category": "Drink",
    "description": "lol"
}, {
    "id": 3,
    "name": "10 shots",
    "price": 27.9,
    "category": "Shots",
    "description": "Compatible asymmetric internet solution"
}, {
    "id": 4,
    "name": "10 shots",
    "price": 27.9,
    "category": "Shots",
    "description": "Compatible asymmetric internet solution"
}]