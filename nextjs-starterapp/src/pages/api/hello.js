export const config = {
    api: {
      bodyParser: {
        sizeLimit: '1mb',
      },
    },
  }



export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
  }

