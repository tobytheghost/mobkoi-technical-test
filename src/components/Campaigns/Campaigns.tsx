import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getCampaigns from '../../api/getCampaigns'
import { Button } from '../index'
import styles from './Campaigns.module.scss'

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const campaigns = await getCampaigns()
      setCampaigns(campaigns)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) return <div>Loading</div>

  const TABLE_KEYS = {
    id: 'ID',
    startDate: 'Start Date',
    endDate: 'End Date',
    targetImpressions: 'Target',
    deliveredImpressions: 'Delivered'
  }

  type Key = keyof typeof TABLE_KEYS

  const formatValue = (key: Key, value: string | number) => {
    switch (key) {
      case 'startDate':
      case 'endDate':
        return new Date(value).toLocaleDateString()
      default:
        return value
    }
  }

  return (
    <div className={styles['campaigns']}>
      <Link to='/'>
        <Button>{`< Back`}</Button>
      </Link>
      <table className={styles['table']}>
        <thead>
          <tr>
            {Object.keys(TABLE_KEYS).map(key => (
              <th key={key}>{TABLE_KEYS[key as Key]}</th>
            ))}
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {campaigns
            .sort((a, b) => b.startDate - a.startDate)
            .map(campaign => {
              const { id } = campaign
              const percentage = Math.round(
                (campaign['deliveredImpressions'] /
                  campaign['targetImpressions']) *
                  10000
              ) / 100
              return (
                <tr key={id}>
                  {Object.keys(TABLE_KEYS).map(key => {
                    const value = campaign[key as Key]
                    return <td key={key}>{formatValue(key as Key, value)}</td>
                  })}
                  <td>
                    {`${percentage}%`}
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Campaigns
