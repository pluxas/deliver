import styles from "./Scroll.module.scss";
import first from "../../../assets/images/stake.png";
import second from "../../../assets/images/noodles.png";
import third from "../../../assets/images/foods.png";
import user from "../../../assets/images/user-logo.png";
import user_two from '../../../assets/images/user-logo2.png'
import GlobalSvg from "../../../assets/icons/GlobalSvg";

const Scroll = () => {
  return (
    <div className={styles["scroll"]}>
      <div className={styles["scroll__left"]}>
        <img src={first} alt="" />
        <div>
          <img src={second} alt="" />
          <img src={third} alt="" />
        </div>
      </div>
      <div className={styles["scroll__right"]}>
        <div className={styles["scroll__right-header"]}>
          <p>What the say</p>
          <h1>
            What Our Customers Say <br /> About Us
          </h1>
        </div>
        <div className={styles["scroll__right-cards"]}>
          <div className={styles["first__card"]}>
            <div className={styles["first__card-header"]}>
              <img src={user} alt="" />
              <div className={styles["first__card-header-about"]}>
                <h1>Naura Silvana</h1>
                <div className={styles["stars"]}>
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star-two" />
                </div>
              </div>
            </div>
            <p className={styles["first__card-main"]}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.”
            </p>
          </div>
          <div className={styles["second__card"]}>
            <div className={styles["second__card-header"]}>
              <img src={user_two} alt="" />
              <div className={styles["second__card-header-about"]}>
                <h1>Azura</h1>
                <div className={styles["stars"]}>
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star" />
                  <GlobalSvg id="star-two" />
                </div>
              </div>
            </div>
            <p className={styles["second__card-main"]}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
