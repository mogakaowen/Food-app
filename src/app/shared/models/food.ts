export class Food{
    id!: number;
    name!: string;
    price!: number;
    description!: string;
    tags?: string[];
    favorite!: boolean;
    stars!: number;
    imageUrls!: string;
    origins!: string[];
    cookTime!: string;  
}