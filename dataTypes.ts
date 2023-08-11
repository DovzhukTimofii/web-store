export interface dataType {
    onDelete?: (item: number) => void;
    filter?: any;
    id: number,
    title: string,
    img: string,
    desc: string,
    category: string,
    price: string
}