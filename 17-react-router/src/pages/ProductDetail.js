import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams(); // url에서 추출

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <Link to='..' rela  tive='route'>Back</Link>
      {/* 상대경로 일 때 relative가 route면 router 정의에 따라 family의 url로 이동, path면 urldㅔ서 한 단계 위로 이동 */}
    </>
  );
}

export default ProductDetailPage;
