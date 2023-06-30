import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Logout({ onLogin }) {
  const logout = useHistory();
  logout.push("/")
  onLogin(false);
}

export default Logout;
