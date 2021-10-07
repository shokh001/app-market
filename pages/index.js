import React from "react";
import MiniCarouselCard from "../components/MiniCarouselCard";
import SlideCarousel from "../components/SlideCarousel";
import styles from "./Home.module.scss";
import ProductsCarousel from "../components/ProductsCarousel";

const Index = () => {
  return (
    <div className="main">
      <div className={styles.wrapCaousels + " container d-flex"}>
        <SlideCarousel />
        <MiniCarouselCard />
      </div>
      <ProductsCarousel title="Новые поступления" />
      <ProductsCarousel title="Новые поступления" />
      <ProductsCarousel title="Новые поступления" />
    </div>
  );
};

export default Index;
