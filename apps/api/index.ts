import { Hono } from 'hono'
import { xataClient } from './xata'

const app = new Hono()

app.get('/features', async (c) => {
  const features = await xataClient.db.Feature.getAll()
  return c.json(features)
})

app.post('/features/:id/vote', async (c) => {
  const id = c.req.param('id')
  const feature = await xataClient.db.Feature.read(id)
  if (!feature) return c.notFound()

  const updated = await xataClient.db.Feature.update(id, {
    votes: (feature.votes || 0) + 1,
  })

  return c.json(updated)
})

export default app
