export class Product{
    id:number;
    name: string;
    price:number;
    description:string;
    imageUrl: string;
    discount: number;

    constructor(id, name, description = '' , price = 0, imageUrl = ' ', discount)
    {
        this.id = id
        this.price = price
        this.description = description
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
        this.discount = discount
    }
}

