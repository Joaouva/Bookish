// COMPONENTE COM DOIS CART\OES - 1 LIVRARIAS E 1 LIVROS
import react from "react";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <NavLink exact to="/bookfeed">
        {" "}
        Livrarias{" "}
      </NavLink>
      <NavLink exact to="/userfeed">
        {" "}
        Livros{" "}
      </NavLink>
    </div>
  );
}

export default Homepage;
