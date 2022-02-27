import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
    return(
        <div>Página inicial <br/><br/>

            <Link to="/about">Ir para página sobre!</Link>
        </div>
    );
}

export default Page;