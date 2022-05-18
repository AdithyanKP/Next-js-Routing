import Link from "next/link"; //use navigate other pages

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/Blog">
        <a>Blog</a>
      </Link>
    </>
  );
};
export default Home;
