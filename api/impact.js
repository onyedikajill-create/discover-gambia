const impactData = {
  totalBenefit: 12500,
  jobsCreated: 12,
  treesPlanted: 450,
  griotApprentices: 8,
  kumpoPerformances: 15
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  res.status(200).json(impactData)
}