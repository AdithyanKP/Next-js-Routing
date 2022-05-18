import Link from "next/link";

const index = () => {
  return (
    <>
      <h1>
        <Link href="/product/1" replace={true}>
          <a>product 1</a>
        </Link>
      </h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
    </>
  );
};

export default index;
