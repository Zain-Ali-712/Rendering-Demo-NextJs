import { Review } from "@/components/review";
import { Product } from "@/components/product";

import { Suspense } from "react";

export default function ProductReviews(){
    return (
        <div>
            <h1>Product reviews</h1>
            <Suspense fallback={<p>Loading Product...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Product...</p>}>
                <Review/>
            </Suspense>

        </div>
    );
}