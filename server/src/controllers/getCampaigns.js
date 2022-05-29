import axios from 'axios'

const getCampaigns = async () => {
  const headers = {
    'x-api-Key': process.env.API_KEY
  }
  try {
    const response = await axios.get(`${process.env.API_ENDPOINT}/campaigns/*`, { headers })
	return response.data
  } catch (error) {
    console.error(error)
	return []
  }
}

export default getCampaigns
