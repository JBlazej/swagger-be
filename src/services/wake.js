import cron from 'node-cron'
import request from 'request'

export async function wakeUpServer () {
  cron.schedule('*/10 * * * *', () => {
    request('https://maxa-fabi.herokuapp.com', { json: false }, (err, res) => {
      if (err) { return console.log(err) }
      console.log('Ping and now you will not died!!')
    })
  })
}
