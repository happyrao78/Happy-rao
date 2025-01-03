// TRY CATCH
// const asyncHandler = (func)=> async(req,res,next) =>{
//     try {
//         await func (req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success :false,
//             message : error.message
//         })
//     }

// }

//PROMISES

const asyncHandler = (requestHandler) =>{
    return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=> next(error))
    }

}

export {asyncHandler}