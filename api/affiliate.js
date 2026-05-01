import axios from 'axios'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { location } = req.query
  const apiKey = process.env.BOOKING_COM_API_KEY

  try {
    const response = await axios.get('https://distribution-xml.booking.com/2.0/hotels', {
      headers: {
        'Authorization': `Basic ${Buffer.from(apiKey).toString('base64')}`
      },
      params: {
        location,
        rows: 10
      }
    })

    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}