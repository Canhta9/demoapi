const User = require('../models/user.model');

const add = async function(req, res) {
    try {
        const { fullname, email } = req.body;
        const user = new User({
            fullname,
            email,
        });
        await user.save()
        return res.status(201).send(user)
    }
    catch (error) {
        console.log('error', error)
        return res.status(400).send(error)
    }
}

const update = async function(req, res) {
    try {
        const { fullname, email } = req.body;
        const { id } = req.params;
        let user = await User.findById(id)
        user.fullname = fullname;
        user.email = email;
        await user.save();
        res.status(200).send(true)
    }
    catch (error) {
        console.log('error', error)
        return res.status(400).send(error)
    }
}

const lookup = async function(req, res) {
    try{
        const { id } = req.params;
        let user = await User.findById(id);
        if(id){
            console.log(id)
            User.find({_id:id});
            res.status(200).send(user)
        }else{
            const user = await User.find({});
            res.status(200).send(user)
        }
        return
    }
    catch (error) {
        console.log('error', error)
        return res.status(400).send(error)
    }
}
module.exports = {
    add,
    update,
    lookup
}