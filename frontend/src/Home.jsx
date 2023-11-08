import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50" style={{ maxWidth: "40%" }}>
        <h2>Welcome To IIC NITT</h2>
        <img
          src="https://media.licdn.com/dms/image/D5603AQHc8xwXV4No6g/profile-displayphoto-shrink_800_800/0/1693565528537?e=2147483647&v=beta&t=uVP5ggOv7MOWXBCcOIcpyR0GGcqRloIYkYrMsSmWP-E"
          alt="logo"
          className="border w-100 rounded-0 text-decoration-none"
        />
        <Link
          to="/login"
          className="btn btn-success border w-100 rounded-0 text-decoration-none"
        >
          Login
        </Link>
        <p>Don't have an account?</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
export default Home;
