import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowBookF() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  // const getBooks = () => {
  // fetch("http://localhost:9090/book/show", {
  //   method: "POST",
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((jsondataarr) => {
  //     setData(jsondataarr);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  useEffect(() => {
    if (!flag) {
      fetch("http://localhost:9090/book/show", {
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


  // const setFlagFuncto

  // console.log(data)
  return (
    <>
      <div>
        <div className="container">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Details</td>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, index) => {
                return (
                  <tr>
                    <td>{obj.bookid}</td>
                    <td>{obj.bookName}</td>
                    <td>
                      <Link to={"showById/" + obj.bookid}>
                        <button className="btn btn-primary">
                          Book Details {obj.bookid}
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
