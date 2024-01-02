export function getAllCategories () {
    return "products/categories";
}


export function getAllProducts () {
    return "products"
}

export function getAllProductById (category) {
    return `products/category/${category}`
}

export function getSingleProductById(id) {
    return `products/${id}`
}

export function signup (){
    return 'users/'
}


export function signin() {
    return `auth/login`
}

export function getCartByUser (userId) {
    return `carts/user/${userId}`
}