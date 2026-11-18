export function errorMiddle(err, req, res, next){
    console.log(err)
    res.status(500).json({
        status: false,
        message: "Server error",
    })
}