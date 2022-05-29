import express from 'express'
import addCampaign from '../controllers/addCampaign.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { id, startDate, endDate, targetImpressions } = req.body
  const campaign = await addCampaign({
    id,
    startDate,
    endDate,
    targetImpressions
  })
  return res.json(campaign)
})

export default router
