import GlobalSvg from "../../assets/icons/GlobalSvg";
import styles from "./Header.module.scss";
import combo from "../../assets/images/img-hero.png";
import Button from "../../containers/Button";

const Header = () => {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <h1>Let’sFood</h1>
          <GlobalSvg id="logo" />
        </div>
        <ul className={styles["header__nav-menu"]}>
          <li>Home</li>
          <li>Menu</li>
          <li>How it works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={styles["header__buttons"]}>
          <GlobalSvg id="search" />
          <div className={styles["header__buttons-cart"]}>
            <div>2</div>
            <GlobalSvg id="cart" />
          </div>
          <button className={styles["header__buttons-signin"]}>
            <GlobalSvg id="sign-in" />
            <p>Sign in</p>
          </button>
          <div className={styles["header__hero"]}>
            <GlobalSvg id="menu"/>
          </div>
        </div>
      </header>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar__left"]}>
          <h1>
            Be The Fastest In <br /> Delivery Your <span>Food</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
            aliquam, purus sit amet
          </p>
          <Button>Get Started</Button>
        </div>
        <div className={styles["navbar__right"]}>
          <img src={combo} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Header;
