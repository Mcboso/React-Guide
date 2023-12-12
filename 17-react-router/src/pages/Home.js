import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  // const navigate = useNavigate();
  // function navigateHandler() {
  //   navigate('/products');
  // }

  return(
    <div>
      <h1>My Home</h1>
      <p>go to <Link to="products">products</Link></p> 
      {/* http 요청 보내지 않음 => 새로고침 X */}
    </div> 
  );
};

export default HomePage;