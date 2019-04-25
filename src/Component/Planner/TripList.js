import React from 'react';

const triplist = (props) => {

return props.items.map((trip, index, name, email, departDate, returndate, location, hotel, item)=>
    // <li key={index}>
    //         {item}
    //         {trip}
           
    // </li>
    <tr>
          <td key={index} className="trips" >
            {this.props.change.name}
          </td>
          <td>
            {this.props.change.departDate}
          </td>
          <td>
            {this.props.change.returndate}
          </td>
        </tr>
)

}
export default triplist;
 