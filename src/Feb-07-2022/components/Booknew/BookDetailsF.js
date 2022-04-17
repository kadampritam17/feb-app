import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetailsF() {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    let object = useParams()
    console.log(object)

    useEffect(() => {
      if (!flag) {
        fetch(`http://localhost:9090/book/showById/${object.id}`, {
        method: "POST",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsondataarr) => {
          setData(jsondataarr);
          setFlag(true);
        })
        .catch((err) => {
          console.log(err);
        });
      }
      });


    return (
        <div>
          <div className="container">
              <h1>Details of Book</h1>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Cost</td>
                    <td>Author</td>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{data.bookid}</td>
                    <td>{data.bookName}</td>
                    <td>{data.bookCost}</td>
                    <td>{data.bookAuthor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    )
}
