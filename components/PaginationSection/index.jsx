import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "../ProductCard/ProductCard.module.scss";

const LibraryPagination = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const limit = 16;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${16}`
      );
      const data = await res.json();
      const total = res.headers.get(`x-total-count`);
      setPageCount(Math.ceil(total / 16));
      setItems(data);
    };

    getComments();
  }, []);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected + 1);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
  };

  return (
    <div>
      <div className={styles.paginationWrapper}>
        {items.map((item) => {
          return (
            <div className={styles.ProductCard}>
              <div className={styles.cardHeader}>
                <p className="mb-0 font-montserrat-regular">
                  <span></span> В рассрочку
                </p>
                <div className={styles.favourite}>
                  <span className="icon icon-heart"></span>
                  <div className={styles.toltip}>
                    <p className="mb-0">Избранное</p>
                  </div>
                </div>
              </div>

              <div className={styles.trolley}>
                <span
                  className={styles.trolleyIcon + " icon icon-trolley"}
                ></span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.discount}>
                  <span className="font-montserrat-regular m-0">
                    <p className="font-montserrat-bold m-0 d-block">-20%</p>{" "}
                    скидка
                  </span>
                </div>
                <img
                  className="img-fluid"
                  src="./assets/images/camera.png"
                  alt="productImg"
                />

                <p
                  className={
                    styles.deleteSum +
                    " text-decoration-line-through mb-0 font-montserrat-medium"
                  }
                >
                  1 000 000 сум
                </p>
                <h4 className="mb-0 font-montserrat-medium">{item.id} сум</h4>
                <h5 className="mb-0 font-montserrat-bold">AA EliteBook G2</h5>
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"pagination-item"}
        pageLinkClassName={"pagination-link"}
        previousClassName={"arrow-left"}
        previousLinkClassName={"arrowLeft-link"}
        nextClassName={"arrow-right"}
        nextLinkClassName={"arrowRight-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default LibraryPagination;
