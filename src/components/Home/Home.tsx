import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles['home']}>
      <h1>Mobkoi Developer Test</h1>
      <Link className={styles['link']} to='/campaigns'>
        <Button>Campaigns</Button>
      </Link>
      <Link className={styles['link']} to='/form'>
        <Button>Form</Button>
      </Link>
    </div>
  )
}

export default Home
