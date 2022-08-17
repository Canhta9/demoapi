const Permission = require('../models/permission.model');

const add = async function(req, res) {
    try {
        const {  name, display_name, description } = req.body;
        const permission = new Permission({
            name,
            display_name,
            description
        });
        await permission.save()
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
        let permission = await Permission.findById(id)
        if(permission){
            console.log(role)
            permission.name = name;
            permission.display_name =display_name ;
            permission.description = description;
            await permission.save();
            res.status(200).send(true)
        }
        res.status(200).send(false)
    }
    catch (error) {
        console.log('error', error)
        return res.status(400).send(error)
    }
}

const remove = async function(req, res) {
    try {
        const { id } = req.params;
        let permission = await Permission.findById(id)
        if(id){
            console.log(id)
            permission.deleteOne({_id:id});
            res.status(200).send(true)
            return
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
    remove,
}