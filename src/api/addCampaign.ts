import { baseUrl } from './config'

const addCampaign: (data: NewCampaign) => any = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/api/add-campaign`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json)
    return json
  } catch (error) {
    console.error(error)
    return []
  }
}

export default addCampaign
