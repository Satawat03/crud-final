const pool = require("../Config/database")
exports.getData = async(req,res) => {
    const [result] = await pool.query("SELECT * FROM `todos` ")
    res.send(result);
}
exports.addData = async(req,res) => {
    const {label,STATUS,description} = req.body
    const data = await pool.query("INSERT INTO `todos`(`label`, `STATUS`, `description`) VALUES (?,?,?)" ,[label,STATUS,description] );
    res.send(data)

}
exports.editData = async(req,res) => {
    const {label,STATUS,description,id} = req.body
    const data =await pool.query("UPDATE `todos` SET `label`=?,`STATUS`=?,`description`=? WHERE id=?" ,[label,STATUS,description,id] );
    res.send(data)

}
exports.deleteData = async(req,res) => {
    const {id} = req.body
    const data =await pool.query("DELETE FROM `todos` WHERE id=?" ,[id] );
    res.send(data)  
}
