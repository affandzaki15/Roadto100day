export function logger(req, res, next){
   const waktu = new Date().toString()
    const method = req.method
    const url = req.originalUrl

    console.log(`[${waktu} ${method} ${url}]`)
    next()
}