export interface Collection{
    id: number;
    created_at: Date;
    name: string;
    image: string;
}

export interface Item{
    id: number;
    created_at: Date;
    name: string;
    price: number;
    image_url: string;
    conllections_id: number;
}