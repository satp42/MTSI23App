import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body)

        // Send a response back
        res.status(200).json({ status: 'Received' })
    } else {
        // Handle any other HTTP methods
        res.status(405).json({ error: 'Invalid HTTP method' })
    }
}

export default handler