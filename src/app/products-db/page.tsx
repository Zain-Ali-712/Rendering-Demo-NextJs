import { getProducts } from "@/prisma-db";

type Product = {
    id: number,
    title:string,
    price: number,
    discription: string| null,
};

export default async function ProductsDBPage(){
    const products : Product[] = await getProducts();

    return (
        <ul className="space-y-4 p-4">
            {products.map((product)=>(
                <li  
                key={product.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-800"
                >
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p> {product.discription}</p>                        
                    <p className="text-lg font-medium"> ${product.price}</p>
                </li>
            ))}
        </ul>
    );
}
