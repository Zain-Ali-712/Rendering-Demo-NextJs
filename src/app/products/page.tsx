import Link from "next/link";

export default function Products(){
    return (
        <>
        <h1>Products List with details:</h1>
        <Link href={"/Products/1"}>Product 1</Link>
        <Link href={"/Products/2"}>Product 2</Link>
        <Link href={"/Products/3"}>Product 3</Link>
        </>
    );
}