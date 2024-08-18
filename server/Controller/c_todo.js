const pool = require("../Config/database")
exports.getData = async(req,res) => {
    const [result] = await pool.query("SELECT * FROM `todos` ")
    res.send(result);
}
exports.addData = async(req,res) => {
    const {label,STATUS,discrition} = req.body
    const data = await pool.query("INSERT INTO `todos`(`label`, `STATUS`, `discrition`) VALUES (?,?,?)" ,[label,STATUS,discrition] );
    res.send(data)

}
exports.editData = async(req,res) => {
    const {label,STATUS,discrition,id} = req.body
    const data =await pool.query("UPDATE `todos` SET `label`=?,`STATUS`=?,`discrition`=? WHERE id=?" ,[label,STATUS,discrition,id] );
    res.send(data)

}
exports.deleteData = async(req,res) => {
    const {id} = req.body
    const data =await pool.query("DELETE FROM `todos` WHERE id=?" ,[id] );
    res.send(data)  
}
