import Button from '../../../containers/Button'
import styles from './Discount.module.scss'

const Discount = () => {
  return (
    <div className={styles['discount']}>
        <h1>Join our member and get <br /> discount up to 50%</h1>
        <Button>Sign Up</Button>
    </div>
  )
}

export default Discount