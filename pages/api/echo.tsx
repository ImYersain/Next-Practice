import { NextApiRequest, NextApiResponse } from "next";

interface ReqNextApiRequest extends NextApiRequest {
    query: {
        message: string
    }
}

export default function echo(req: ReqNextApiRequest, res: NextApiResponse) {
    res.statusCode = 200,
    res.setHeader('Content-Type', 'application/json'),
    res.end(JSON.stringify({        //метод стрингифай в отличии от метода парсе наоборот , делает из обьекта --> джейсон
        message: req.query.message || 'Base message'
    }))
}