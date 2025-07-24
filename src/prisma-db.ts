import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seedProducts = async ()=>{
    const count = await prisma.product.count();
    if(count===0){
        await prisma.product.createMany({
            data:[
                {title:"Product 1",price:500, discription:"Discription 1"},
                {title:"Product 2",price:700, discription:"Discription 2"},
                {title:"Product 3",price:800, discription:"Discription 3"},
            ],
        });
    }
};

seedProducts();

export async function getProducts(){
    await new Promise((resolve) => setTimeout(resolve,2000));
    return prisma.product.findMany();

}

export async function getProduct(id:number){
    await new Promise((resolve) => setTimeout(resolve,2000));
    return prisma.product.findUnique({
        where:{id},
    });
}

export async function addProduct(
    title:string,
    price:number,
    discription:string
){
    await new Promise((resolve) => setTimeout(resolve,2000));
    return prisma.product.create({
        data: {title,price,discription},
    });
}


export async function updateProduct(
    id:number,
    title:string,
    price:number,
    discription:string
){
    await new Promise((resolve) => setTimeout(resolve,2000));
    return prisma.product.update({
        where:{id},
        data: {title,price,discription},
    });
}


export async function deleteProduct(id:number){
    await new Promise((resolve) => setTimeout(resolve,2000));
    return prisma.product.delete({
        where:{id},
    });
}

