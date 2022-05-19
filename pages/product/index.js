import Link from "next/link";
import Router from "next/router";
const index = () => {
  //programatically navigation
  const onClickHandler = () => {
    console.log("place order");
    Router.replace("/product/1");
  };
  return (
    <>
      <h1>
        <Link href="/product/1" replace={true}>
          <a>product 1</a>
        </Link>
      </h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>

      <button onClick={onClickHandler}>Place order</button>
    </>
  );
};

export default index;
