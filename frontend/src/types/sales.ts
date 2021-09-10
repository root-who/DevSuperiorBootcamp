export type SaleSum = {
    sellerName: string,
    sumAmountSale: number
}

export type SellerSuccess = {
        sellerName: string,
        clientsVisited: number,
        dealsMaked: number
}

export type Sale ={
    id: number,
    date: string,
    visitedClients: number,
    dealsMaked: number,
    amount: number,
    seller:Seller
}

export type SalePage ={
    content?: Sale[];
    last: boolean,
    totalPages: number,
    totalElements: number,
    size?: number,
    number: number,
    first: boolean,
    numberOfElements?: number,
    empty?: boolean
}

export type Seller = {
    id: number,
    name: string
}