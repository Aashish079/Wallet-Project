const userDashboard = (req, res)=>{

    res.status(200).json({
        status:"Success",
        message:"Welcome to the Dashboard"
    })
}

export default userDashboard;