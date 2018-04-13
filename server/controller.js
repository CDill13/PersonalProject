const chalk = require("chalk");
let ctrlrChalk = chalk.blue;
module.exports = {
    createId: (req, res) => {
        console.log(ctrlrChalk(req.body))
        const dbInstance = req.app.get("db");
        const {date_created, name, phone_home, phone_cell, email, address, city, state, zip, abana_bool, abana_num, referred_by, auth_id} = req.body;
    
        dbInstance.create_id([auth_id])
        .then(() => {res.status(200).send()})
        .catch((err) => console.log("create_id err:" + err) )
    },
    getMember: (req, res, next) => {
        console.log(ctrlrChalk(req.body))
        const dbInstance = req.app.get("db");
        const {} = req.body;
    },
    getPaymentsForMember: (req, res, next) => {

    },
    updateMembership: (req, res) => {
        console.log(ctrlrChalk(req.body))
        const dbInstance = req.app.get("db");
        const {date_created, name, phone_home, phone_cell, email, address, city, state, zip, abana_bool, abana_num, referred_by, auth_id} = req.body;

        dbInstance.update_membership_info([date_created, name, phone_home, phone_cell, email, address, city, state, zip, abana_bool, abana_num, referred_by, req.user.auth_id])
        .then(() => {
            res.status(200).send()})
        .catch((err) => console.log("update_membership_info err:" + err) )
    }
}
