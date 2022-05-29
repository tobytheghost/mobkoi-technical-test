import express from 'express'
import getCampaigns from '../controllers/getCampaigns.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const campaigns = await getCampaigns()
  return res.json(campaigns)
})

export default router
