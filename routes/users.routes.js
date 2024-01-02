import express from "express";
import userRegister from "../controllers/userRegister.js";
import userLogin from "../controllers/userLogin.js";
import userDashboard from "../controllers/userDashboard.js";
import auth from "../middlewares/auth.js";

const userRouter = express.Router();    // Create a new router object

userRouter.post("/login", userLogin);
userRouter.post("/register", userRegister);

//Protected Route ... only logged in user can access this route
userRouter.use(auth); // This will make sure that all the routes below this line are protected
userRouter.get("/dashboard",userDashboard);

export default userRouter;