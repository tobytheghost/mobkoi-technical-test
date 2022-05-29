declare module '*.scss' {
  const content: { [key: string]: any }
  export = content
}

interface NewCampaign {
  id: string
  endDate: number
  startDate: number
  targetImpressions: number
}

interface Campaign extends NewCampaign{
  deliveredImpressions: number
}
