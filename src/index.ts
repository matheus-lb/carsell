import { app } from "./controller/app";
import { VehicleBusiness } from "./business/VehicleBusiness";
import { IdGenerator } from "./services/IdGenerator";
import { VehicleDatabase } from "./data/vehicleDatabase";
import { Authenticator } from "./services/Authenticator";
import { vehiclesController } from "./controller/vehicleController";
import upload from "./services/multerConfig";
import { UserBusiness } from "./business/UserBusiness";
import { UserDatabase } from "./data/UserDatabase";
import { UserController } from "./controller/UserController";



const vehicleBusiness = new VehicleBusiness(
    new IdGenerator(),
    new VehicleDatabase(),
    new Authenticator()
)

const vehicleController = new vehiclesController(vehicleBusiness)


const userBussines = new UserBusiness(
    new IdGenerator(),
    new UserDatabase(),
    new Authenticator()
)

const userController = new UserController(
    userBussines
)
app.post("/insert", upload.single('file'),vehicleController.insertVehicle)
app.get("/select", vehicleController.getVehicle )
app.get("/all", vehicleController.getAllVehicles )
app.post("/update",upload.single('file'), vehicleController.updateVehicle )
app.delete("/delete", vehicleController.deleteVehicle )
app.post("/signup", userController.signUp)
app.post("/login", userController.login)