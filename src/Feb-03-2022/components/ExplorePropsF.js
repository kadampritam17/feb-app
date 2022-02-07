import React from 'react';



export default function ExplorePropsF(props) {
  let s = 50;

  let obj = JSON.parse(props.person);
  if (props.flag) s = "this is true flag in props";
  else s = "flag is false";

  let prods = props.productArray;

  return (
    <div>
      <p>{s}</p>
      <p>{props.num * props.num}</p>
      <p>{props.message}</p>
      <p>{props.info.cost}</p>
      <p>{props.color}</p>
      <p>{obj.name}</p>
      <p>{obj.location}</p>
      <p>
        {prods[0].prodName}
        {prods[0].prodCost}
      </p>
      <div>
        <table border="1">
          <tbody>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Cost</th>
            </tr>
            {prods.map(function (data, idx) {
              return (
                <tr>
                  <td> {idx +1}</td>
                  <td> {data.prodName}</td>
                  <td> {data.prodCost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
