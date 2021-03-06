import React from 'react';

const Card = ({
  id,
  name,
  intro,
  image,
}) => {
  return (
    <>
      <style jsx>
        {`
          .card-container {
            display: flex;
          }
          .super-hero-image {
            width: 32px;
            height: 32px;
            border-radius: 100%;
            margin-right: 8px;
            border: 1px solid #fff;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
          }
          .super-hero-image img {
            width: 32px;
            height: 32px;
            border-radius: 100%;
          }
          .item-title {
            font-size: 16px;
            font-weight: 400;
            color: #2F363F;
            font-size: 14px;
          }
          .item-subtitle {
            font-size: 12px;
            font-weight: 400;
            color: #2F363F;
          }
        `}
      </style>
      <div className="card-container">
        <div className="super-hero-image">
          <img
            className="super-hero-image"
            src={image}
            alt=""
          />
        </div>
        <div className="info-block">
          <div className="item-title">
            { name }
          </div>
          <div className="item-subtitle">
            { intro }
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
