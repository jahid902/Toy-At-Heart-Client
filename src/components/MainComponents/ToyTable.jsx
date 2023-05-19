import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const ToyTable = ({singleToy}) => {

    const {user} = useContext(AuthContext);

        const {_id, seller, toyName, category, price, quantity } = singleToy;

  return (
    
        <tbody>
          {/* main row  */}
          <tr className="hover">
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            {
                user ? <td><Link className="btn btn-outline btn-warning">View Detail</Link></td> :
                <td><Link to="/SignIn" className="btn btn-outline btn-warning">Login To view info</Link></td>
            }
          </tr>
        </tbody>
      
  );
};

export default ToyTable;
