import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../index'
import DatePicker from 'react-datepicker'
import { v4 as uuid } from 'uuid'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './Form.module.scss'
import addCampaign from '../../api/addCampaign'

const defaultId = uuid()
const today = new Date()
const defaultStartDate = new Date(today)
const defaultEndDate = new Date(today.setMonth(today.getMonth() + 3))

const Campaigns = () => {
  const [id, setId] = useState(defaultId)
  const [startDate, setStartDate] = useState(defaultStartDate)
  const [endDate, setEndDate] = useState(defaultEndDate)
  const [targetImpressions, setTargetImpressions] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if(startDate > endDate) return setError('End date is before start date')

    const numberImpressions = parseInt(targetImpressions)
    if(!numberImpressions || isNaN(numberImpressions)) return setError('Not enough target impressions')

    const data = {
      id: id ? id : defaultId,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
      targetImpressions: numberImpressions
    }

    const added = await addCampaign(data)

    if(!added.id) return setError('Error: campaign could not be added')

    setMessage(`Added campaign with id: ${added.id}`)
    setId(uuid())
    setStartDate(defaultStartDate)
    setEndDate(defaultStartDate)
    setTargetImpressions('')
  }

  return (
    <div className={styles['page']}>
      <Link to='/'>
        <Button>{`< Back`}</Button>
      </Link>
      <form className={styles['form']} onSubmit={handleSubmit}>
        {error && <div className={styles['error']}>{error}</div>}
        {message && <div className={styles['message']}>{message}</div>}
        <label className={styles['label']}>
          ID
          <input
            placeholder='Enter an ID'
            type='text'
            value={id}
            onChange={event => {
              setError('')
              setMessage('')
              setId(event.target.value)
            }}
            disabled
          />
        </label>
        <label className={styles['label']}>
          Start Date
          <DatePicker
            dateFormat='dd/MM/yyyy'
            wrapperClassName='datePicker'
            selected={startDate}
            minDate={defaultStartDate}
            onChange={(date: Date) => {
              setError('')
              setMessage('')
              setStartDate(date)
            }}
            required
          />
        </label>
        <label className={styles['label']}>
          End Date
          <DatePicker
            dateFormat='dd/MM/yyyy'
            wrapperClassName='datePicker'
            selected={endDate}
            minDate={startDate}
            onChange={(date: Date) => {
              setError('')
              setMessage('')
              setEndDate(date)
            }}
            required
          />
        </label>
        <label className={styles['label']}>
          Target Impressions
          <input
            placeholder='Enter a target for impressions'
            type='number'
            value={targetImpressions}
            onChange={event => {
              setError('')
              setMessage('')
              setTargetImpressions(event.target.value)
            }}
            min='0'
            required
          />
        </label>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default Campaigns
