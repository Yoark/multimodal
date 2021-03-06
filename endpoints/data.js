const express = require('express')
const router = express.Router()
const {spawn} = require('child_process')

// Body Parser Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.route('/getScore').all(jsonParser).post(async (req, res) => {
  try {
    const xGroup = req.body.xGroup
    const newData = req.body.instances
    console.log('xGroup',xGroup)
    console.log('newData',newData)
    let largeDataSet = []

    // spawn new child process to call the python script
    const python = spawn(
      'python3',
      [`./compute/compute_score.py`, `--gens_file`, JSON.stringify(newData)],
      {
        maxBuffer: 1024 * 1024 * 1024,
      })

    // collect data from script
    python.stdout.on('data', function (data) {
      // Pipe data from python script ...
      console.log('data',data)
      largeDataSet.push(data)
    })

    // in close event we are sure that stream is from child process is closed
    python.on('close', (code) => {
      // parse score from the result
      console.log('largeDataSet',largeDataSet)
      const dumpString = largeDataSet.join('').split('{')
      console.log('dumpString',dumpString)
      const ans = '{' + dumpString[2].replace('\n','')
      // send data to browser
      res.send({
        xGroup: xGroup,
        size: newData.length,
        ...JSON.parse(ans)})
    })
  }
  catch(e) {
    console.log(e)
  }
})

module.exports = router
