import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Logout() {
  const logout = useHistory();
  logout.push("/")
}

export default Logout;
