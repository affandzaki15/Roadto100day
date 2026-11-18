export function loggingMiddle(req, res, next){
    const date = new Date().toString()
    const metode = req.method
    const url = req.originalUrl

   console.log(`${date} ${metode} ${url}`)
   next()
}