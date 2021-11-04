import { useRouter } from "next/router";

const Offer = () => {
  const router = useRouter();
  // console.log(router.query);
  const { id } = router.query;

  return (
    <div>
      <h1>offer! : {id}</h1>
    </div>
  );
};

export default Offer;
