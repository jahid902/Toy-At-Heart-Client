import React from 'react';

const UsersToys = ({toy,index,handleDelete}) => {

    const {_id, seller, toyName, category, price, quantity } = toy;

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
            <td><button className="btn btn-outline btn-success">Update</button></td>
            <td><button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-error">Delete</button></td>
            </tr>
        </tbody>
    );
};

export default UsersToys;