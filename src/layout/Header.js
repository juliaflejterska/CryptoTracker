import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header_img_container}>
      <a href="/">
        <img
          className={classes.header_img}
          src="../img/crypto_tracker_logo.png"
        />
      </a>
    </div>
  );
};

export default Header;
