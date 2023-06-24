import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Logout({ onLogin }) {
  const logout = useHistory();
  onLogin(false);
  logout.push("/");
}

export default Logout;
