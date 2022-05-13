import { useRouter } from "next/router";

//review Details page
const reviewDetail = () => {
  const router = useRouter();
  const reviewid = router.query.reviewId; //getting product Id
  return (
    <div>
      <h1>review {reviewid}</h1>
    </div>
  );
};

export default reviewDetail;
