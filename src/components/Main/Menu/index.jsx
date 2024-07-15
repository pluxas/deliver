import GlobalSvg from "../../../assets/icons/GlobalSvg";
import styles from "./Menu.module.scss";
import ramen from "../../../assets/images/ramen.png";
import salad from "../../../assets/images/salad.png"
import sandwich from "../../../assets/images/sandwich.png"
import spaghetti from '../../../assets/images/spaghetti.png'
import Button from "../../../containers/Button";

const Menu = () => {
  return (
    <div className={styles["menu"]}>
      <div className={styles["menu__top"]}>
        <p className={styles["menu__top-header"]}>Our menu</p>
        <h1 className={styles["menu__top-title"]}>Our Popular Menu</h1>
        <p className={styles["menu__top-text"]}>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
          aliquam
        </p>
      </div>
      <div className={styles["menu__bottom"]}>
        <div className={styles["menu__bottom-product"]}>
          <img src={ramen} alt="" />
          <div className={styles["menu__bottom-product-block"]}>
            <h1 className={styles['name']}>Mie Ramen</h1>
            <p>lorem ipsum</p>
            <div>
              <h1>$20.2</h1>
              <GlobalSvg id="heart" />
            </div>
          </div>
        </div>
        <div className={styles["menu__bottom-product"]}>
          <img src={salad} alt="" />
          <div className={styles["menu__bottom-product-block"]}>
            <h1 className={styles['name']}>Salad Tahu</h1>
            <p>lorem ipsum</p>
            <div>
              <h1>$20.2</h1>
              <GlobalSvg id="heart-two" />
            </div>
          </div>
        </div>
        <div className={styles["menu__bottom-product"]}>
          <img src={sandwich} alt="" />
          <div className={styles["menu__bottom-product-block"]}>
            <h1 className={styles['name']}>Roti Bakar</h1>
            <p>lorem ipsum</p>
            <div>
              <h1>$20.2</h1>
              <GlobalSvg id="heart-two" />
            </div>
          </div>
        </div>
        <div className={styles["menu__bottom-product"]}>
          <img src={spaghetti} alt="" />
          <div className={styles["menu__bottom-product-block"]}>
            <h1 className={styles['name']}>Spaghetti</h1>
            <p>lorem ipsum</p>
            <div>
              <h1>$20.2</h1>
              <GlobalSvg id="heart-two" />
            </div>
          </div>
        </div>
      </div>
      <Button>More Menu</Button>
    </div>
  );
};

export default Menu;
