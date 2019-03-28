import {Router} from 'express'
import asyncWrapper from '../utils/async-wrapper'
import {placesApi, placesKey} from '../config/config'
import axios from 'axios'
import cors from 'cors'

const router = Router()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

router.get('/', cors(corsOptions), asyncWrapper(async (req, res, next) => {
  const {lat, long} = req.query
  const endpoint = `${placesApi}?key=${placesKey}
    &location=${lat},${long}&radius=500&types=lodging`
  try {
    const result = await axios.get(endpoint)
    res.send(result.data.results
      .map(({id, name, vicinity, booked}) => ({id, name, vicinity, booked})))
  } catch (err) {
    next(err)
  }
}))

export default router