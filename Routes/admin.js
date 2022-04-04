// Routes For Admin Dashboard Like ejs, hbs and etc
//

const express = require("express");
const router = express.Router();
const middlewares = require("../Helpers/middlewares");
const controllerAdmin = require("../Controllers/controller-admin");

router.get("/dashboard", controllerAdmin.viewDashboard);
router.get("/dashboard1", controllerAdmin.viewDashboard1);
router.get("/signin", controllerAdmin.viewSignin);
// router.get("/dashboard", controllerAdmin.renderAllUserGame);

// endpoint user game
router.post(
  "/user-game",
  middlewares.checkFieldsPost,
  controllerAdmin.createUserGame
);
router.get("/user-game", controllerAdmin.getAllUserGame);
router.get("/user-game/:id", controllerAdmin.getOneUserGame);
router.put("/user-game/:id", controllerAdmin.updateUserGame);
router.delete("/user-game/:id", controllerAdmin.deleteOneUserGame);
router.delete("/user-game/", controllerAdmin.deleteAllUserGame);

// endpoint user game biodata
router.post(
  "/user-game-biodata",
  middlewares.checkFieldsPostUserGameBiodata,
  controllerAdmin.createUserGameBiodata
);
router.get("/user-game-biodata", controllerAdmin.getAllUserGameBiodata);
router.get("/user-game-biodata/:id", controllerAdmin.getOneUserGameBiodata);
router.put("/user-game-biodata/:id", controllerAdmin.updateUserGameBiodata);
router.delete(
  "/user-game-biodata/:id",
  controllerAdmin.deleteOneUserGameBiodata
);
router.delete("/user-game-biodata/", controllerAdmin.deleteAllUserGameBiodata);


module.exports = router;
