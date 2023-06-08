import express from 'express'
import { Client } from '@notionhq/client';
const notion = new Client({auth: 'secret_voHoNdOnBI9Cc3dfRsrLwDzTm3yLygIV8bjfYUrasRs'});

const app = express()


app.get('/page/content/:id', async (req, res) => {
        const data = await notion.blocks.children.list({
            block_id: req.params.id,
        })
        res.status(200).json(data);
    }
)
app.get('/page/property/:id', async (req, res) => {
    const data = await notion.pages.retrieve({
        page_id: req.params.id,
    })
    res.status(200).json(data);
}
)

module.exports=app