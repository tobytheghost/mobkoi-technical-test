import axios from 'axios'

const addCampaign = async data => {
  const params = new URLSearchParams()
  params.append('id', data.id)
  params.append('startDate', `${data.startDate}`)
  params.append('endDate', `${data.endDate}`)
  params.append('targetImpressions', `${data.targetImpressions}`)

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-api-Key': process.env.API_KEY
  }

  try {
    const response = await axios.post(
      `${process.env.API_ENDPOINT}/campaigns`,
      params,
      { headers }
    )
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export default addCampaign
