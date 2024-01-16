import React from "react";
import ProductionCards from "./ProductionCards";

const ProductionCardsList = () => {
  return (
    <div className="pl-28 pr-5">
      <div className="flex ">
        <ProductionCards
          imgAlt="Disney"
          imgSrc="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/3776/1443776-h-993a8447aed1"
          vidSrc="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132"
        />
        <ProductionCards
          imgAlt="Pixar"
          imgSrc="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/3793/1443793-h-7aacf32a2124"
          vidSrc="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483"
        />
        <ProductionCards
          imgAlt="Marvel"
          imgSrc="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/3782/1443782-h-afdfe6e7c6cb"
          vidSrc="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549"
        />
        <ProductionCards
          imgAlt="Star Wars"
          imgSrc="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/3794/1443794-h-96534e1745fa"
          vidSrc="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512"
        />
        <ProductionCards
          imgAlt="Nat Geo"
          imgSrc="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/3790/1443790-h-f4c6cb8892d1"
          vidSrc="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208"
        />
      </div>
    </div>
  );
};

export default ProductionCardsList;
