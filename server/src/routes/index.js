import express from 'express'
import getCampaigns from './get-campaigns.js'
import addCampaign from './add-campaign.js'

const router = express.Router()

router.get('/').use('/get-campaigns', getCampaigns)

router.post('/').use('/add-campaign', addCampaign)

export default router
