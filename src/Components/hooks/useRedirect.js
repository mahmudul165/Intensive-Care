import { useNavigate } from "react-router";
const useRedirect = () => {
  const navigate = useNavigate();
  const redirectUrl = () => {
    navigate("/home");
  };
  return redirectUrl;
};

export default useRedirect;
