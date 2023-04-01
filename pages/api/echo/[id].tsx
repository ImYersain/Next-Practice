import { NextApiRequest, NextApiResponse } from "next";

interface ReqNextApiRequest {
    query: {
        id: string
    }
}

export default function getById(req: ReqNextApiRequest, res: NextApiResponse) {
    // res.statudCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id);
    res.json({yourId: req.query.id})
}