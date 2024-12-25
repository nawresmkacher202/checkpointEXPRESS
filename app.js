const express = require('express')
const app = express()
function checkWorkingHours(req, res, next) {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  const currentDay = currentDate.getDay()
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
    next()
  } else {
    res.status(403).send('The website is only available during working hours (Monday to Friday, 9 AM - 5 PM)');
  }
}
app.use(checkWorkingHours)
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
  })

  app.get('/services', (req, res) => {
    res.render('services')
  })
  
  app.get('/contact', (req, res) => {
    res.render('contact')
  })
  
  const port = 3000
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
  