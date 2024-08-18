const router = require("express").Router();
const {getData ,addData,editData,deleteData} = require("../Controller/c_todo");

router.get("/user",getData)
router.post("/user",addData)
router.put("/user",editData)
router.delete("/user",deleteData)


module.exports=router;