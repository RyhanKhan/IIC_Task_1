import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50" style={{ maxWidth: "40%" }}>
        <h2>Hello {location.state.id}, you have successfully registered.</h2>
      </div>
    </div>
  );
};
export default Dashboard;
