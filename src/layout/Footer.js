import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      © CryptoTracker&nbsp;<span>{new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
