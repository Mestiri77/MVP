const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.add);
router.delete("/:id", itemController.deleteOne);
router.put("/:id", itemController.updateOne);
router.put("/comments/:id", itemController.updateComments);
router.put("/messages/:id", itemController.updateMessage);
router.put("/subjects/:id", itemController.updateSubjects);
router.put("/levels/:id", itemController.updateLevels);
router.put("/rate/:id", itemController.updateRate);

module.exports = router;
