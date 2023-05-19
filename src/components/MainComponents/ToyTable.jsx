import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const ToyTable = ({singleToy,index}) => {

  const {user} = useContext(AuthContext);
  const {_id, seller, toyName, category, price, quantity } = singleToy;

  return (
    
        <tbody >
          {/* main row  */}
          <tr className="hover bg-orange-600">
            <td>{index+1}</td>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            {
                user ? <td><Link to={`/toy/${_id}`} className="btn btn-outline btn-warning  font-semibold">View Detail</Link></td> :
                <td><Link to="/SignIn" className="btn btn-outline btn-warning font-semibold">Login To view info</Link></td>
            }
          </tr>
        </tbody>
      
  );
};

export default ToyTable;
