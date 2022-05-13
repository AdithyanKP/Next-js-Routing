import { useRouter } from "next/router";

//product Details page
const productDetail = () => {
  const router = useRouter();
  const productid = router.query.productId; //getting product Id
  return (
    <div>
      <h1>Product {productid}</h1>
    </div>
  );
};

export default productDetail;
