import styles from "./About.module.scss";
import order from "../../../assets/images/order.png";
import deliver from "../../../assets/images/delivery.png";
import courier from "../../../assets/images/courier.png";

const About = () => {
  return (
    <div className={styles["about"]}>
      <div className={styles["about__top"]}>
        <p className={styles["about__top-header"]}>How it works</p>
        <h1 className={styles["about__top-title"]}>What We Serve</h1>
        <p className={styles["about__top-text"]}>
          Product Quality Is Our Priority, And Always Guarantees <br /> Halal
          And Safety Until It Is In Your Hands.
        </p>
      </div>
      <div className={styles["about__bottom"]}>
        <div className={styles["about__bottom-first"]}>
          <img src={order} alt="" />
          <h1>Easy To Order</h1>
          <p>
            You only order through <br /> the app
          </p>
        </div>
        <div className={styles["about__bottom-second"]}>
          <img src={deliver} alt="" />
          <h1>Fastest Delivery</h1>
          <p>
            Delivery will be on <br /> time
          </p>
        </div>
        <div className={styles["about__bottom-third"]}>
          <img src={courier} alt="" />
          <h1>Best Quality</h1>
          <p>
            The best quality of food <br /> for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
