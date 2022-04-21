import React, { useState } from "react";
import JSON from "../product.json";

const Project = () => {
  let [page, setPage] = useState(JSON.products.slice(0,10));
  let changePage = (e) => {
    e.preventDefault();
    let pagination = e.target.textContent;
    if (pagination === 1) {
      setPage(JSON.products.slice(0, 10));
      return;
    }
    let start = (pagination * 10) - 10;
    let end = pagination * 10;
    setPage(JSON.products.slice(start, end))
    // setTimeout(() => {
    //   console.log(page)
    // }, 4000);
}
  return (
    <section className="secBlock">
      <article className="artBlock">
        {page.map(value => {
          return (
            <div>
              <figure>
                <img src={value.thumbnail} alt={value.title} />
              </figure>
              <h3>{value.title}</h3>
              <p className="p">
                **rating:{value.rating}
                <p className="p-child">
                  {value.rating > 4.44 ? "Best rating**" : ""}
                </p>
              </p>
              <p className="p2">Price : ${value.price}</p>
              <p className="p3">{value.discountPercentage}% off available</p>
              <p className="p4">{value.description}</p>
            </div>
          );
        })}
        <section id="changePage">
          <button onClick={changePage}>1</button>
          <button onClick={changePage}>2</button>
          <button onClick={changePage}>3</button>
        </section>
      </article>
    </section>
  );
};

export default Project;
