import addCampaign from './addCampaign'
import { v4 as uuid } from 'uuid'

describe('Add Campaign', () => {
  test('Adds record', async () => {
    const today = new Date()
    const startDate = new Date(today)
    const endDate = new Date(today.setMonth(today.getMonth() + 3))
    const campaign = await addCampaign({
      id: `test-${uuid()}`,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
      targetImpressions: 12345
    })
    expect(campaign.id).toHaveLength(41) // test- + uuid
  })
})
