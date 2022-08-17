const Role = require('../models/role.model');

const add = async function(req, res) {
    try {
        const {  name, display_name, description } = req.body;
        const role = new Role({
            name,
            display_name,
            description
        });
        await role.save()
        return res.status(201).send(true)
    }
    catch (error) {
        console.log('error', error)
        return res.status(400).send(error)
    }
}

const update = async function(req, res) {
    try {
        const { name, display_name, description } = req.body;
        const { id } = req.params;
        let role = await Role.findById(id)
        if(role){
            // console.log(role)
            role.name = name;
            role.display_name =display_name ;
            role.description = description;
            await role.save();
            res.status(200).send(true)
        }
        res.status(200).send(false)
    }
    catch (error) {
        console.log('error', error)
        return res.status(400).send(error)
    }
}

module.exports = {
    add,
    update,
}