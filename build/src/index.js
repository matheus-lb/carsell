"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const VehicleBusiness_1 = require("./business/VehicleBusiness");
const IdGenerator_1 = require("./services/IdGenerator");
const vehicleDatabase_1 = require("./data/vehicleDatabase");
const Authenticator_1 = require("./services/Authenticator");
const vehicleController_1 = require("./controller/vehicleController");
const multerConfig_1 = __importDefault(require("./services/multerConfig"));
const UserBusiness_1 = require("./business/UserBusiness");
const UserDatabase_1 = require("./data/UserDatabase");
const UserController_1 = require("./controller/UserController");
const vehicleBusiness = new VehicleBusiness_1.VehicleBusiness(new IdGenerator_1.IdGenerator(), new vehicleDatabase_1.VehicleDatabase(), new Authenticator_1.Authenticator());
const vehicleController = new vehicleController_1.vehiclesController(vehicleBusiness);
const userBussines = new UserBusiness_1.UserBusiness(new IdGenerator_1.IdGenerator(), new UserDatabase_1.UserDatabase(), new Authenticator_1.Authenticator());
const userController = new UserController_1.UserController(userBussines);
app_1.app.post("/insert", multerConfig_1.default.single('file'), vehicleController.insertVehicle);
app_1.app.get("/select", vehicleController.getVehicle);
app_1.app.get("/all", vehicleController.getAllVehicles);
app_1.app.post("/update", multerConfig_1.default.single('file'), vehicleController.updateVehicle);
app_1.app.delete("/delete", vehicleController.deleteVehicle);
app_1.app.post("/signup", userController.signUp);
app_1.app.post("/login", userController.login);
//# sourceMappingURL=index.js.map