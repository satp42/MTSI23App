import type { NextApiRequest, NextApiResponse } from 'next'

let arduinoLiquidData = 0; // Simulating a data store

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Handler activated");

    if (req.method === 'POST') {
        console.log("Processing a POST request");
        console.log(req.body);
        arduinoLiquidData = Number(req.body.liquid); // store the liquid data sent in the POST request
        res.status(200).json({ status: 'Received' }); // Send a response back
    }

    else if (req.method === 'GET') {
        res.status(200).json({ liquid: arduinoLiquidData }); // return the stored liquid data
    }

    else {
        res.status(405).json({ error: 'Invalid HTTP method' }); // Handle any other HTTP methods
    }
}

export default handler;