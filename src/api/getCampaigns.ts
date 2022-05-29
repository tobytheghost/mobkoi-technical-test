import { baseUrl } from './config'

const getCampaigns: () => Promise<Campaign[]> = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/get-campaigns`)
    const data = response.json()
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

export default getCampaigns
