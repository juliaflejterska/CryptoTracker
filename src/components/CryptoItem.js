import randomColor from "randomcolor";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./CryptoItem.module.css";

const CryptoItem = ({ cryptoItem, deleteCurrency }) => {
  const [randomColorPrice, setRandomColorPrice] = useState(randomColor());

  const onDeleteCurrency = () => {
    deleteCurrency(cryptoItem.id);
  };

  return (
    <li>
      <Link to={`/details/${cryptoItem.id}`}>
        <div className={classes.crypto_item}>
          <div className={classes.crypto_item_image_container}>
            <img
              className={classes.crypto_item_image}
              src={cryptoItem.image}
              alt="currency logo"
            />
          </div>

          <div
            className={classes.crypto_item_overlay}
            style={{ border: randomColorPrice }}
          >
            <div className={classes.crypto_item_header}>
              <div className={classes.crypto_item_header_text}>
                <div className={classes.crypto_item_header_name}>
                  {cryptoItem.name}
                </div>
                <div
                  className={classes.crypto_item_header_current_price}
                  style={{ color: randomColorPrice }}
                >
                  {cryptoItem.current_price} PLN
                </div>
              </div>
            </div>
            <p className={classes.crypto_item_price_change_percentage_24h}>
              24H:
              {cryptoItem.price_change_percentage_24h > 0 ? (
                <span
                  className={
                    classes.crypto_item_price_change_percentage_24h_positive
                  }
                >
                  &nbsp;+{cryptoItem.price_change_percentage_24h}%
                </span>
              ) : (
                <span
                  className={
                    classes.crypto_item_price_change_percentage_24h_negative
                  }
                >
                  &nbsp;{cryptoItem.price_change_percentage_24h}%
                </span>
              )}
            </p>
          </div>
        </div>
      </Link>
      <a
        className={classes.crypto_item_delete_button}
        onClick={onDeleteCurrency}
      >
        <img
          width={30}
          src="../../img/crypto_tracker_delete.svg"
          alt="delete icon"
        />
      </a>
    </li>
  );
};

export default CryptoItem;
