import { Router } from 'express'
import asyncWrapper from '../utils/async-wrapper'
import {placesApi, placesKey} from '../config/config'
import axios from 'axios'
const router = Router()

router.get('/', asyncWrapper(async (req, res, next) => {
  const { lat, long } = req.query
  const endpoint = `${placesApi}?key=${placesKey}
    &location=${lat},${long}&radius=500&types=lodging`
  try {
    const dev = await axios.get(endpoint)
    res.send(dev.data.results.map(({name, vicinity})=> ({name, vicinity})))
  } catch (err) {
    next(err)
  }
}))

export default router