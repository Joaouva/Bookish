// COMPONENTE COM DOIS CART\OES - 1 LIVRARIAS E 1 LIVROS
import react from "react";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <NavLink exact to="/bookfeed">
        {" "}
        Todos os Livros{" "}
      </NavLink>
      <NavLink exact to="/userfeed">
        {" "}
        Todas as Livrarias{" "}
      </NavLink>
      <button class="snipcart-checkout">Cart</button>
    </div>
  );
}

export default Homepage;
