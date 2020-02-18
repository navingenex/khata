const UserSchema = require('./routes/user/user');

module.exports = {
    getAll: async function getAll(schema, criteria, projection, option, callback) {
        schema.find((err, data) => {
            if (err)
                callback(err);
            else if (!data)
                callback('errr');
            else
                callback(null, data)
        });
    },
    getOne: async function getOne(schema, criteria, projection, option) {

        const data = await schema.findOne(criteria, {}, {});

        if (data)
            return data
        else
            throw new Error('data not exist');
    },
    create: function create(collection, callback) {

        collection.save((err, data) => {
            if (err)
                callback(err);
            else
                callback(null, data)
        });
    },
    update: async function update(schema, criteria, projection, option) {
        try {
            const data = await schema.findOneAndUpdate(criteria, { accessToken: null }, { new: true });
            callback(null, data)
        } catch (error) {
            callback(error)
        }
    },
    findAndPopulate: async function find(schema, criteria, projection, option) {

        var data = await schema.findOne(criteria, {}, {}).
            populate({path:'ownerId',select:['-password' ,'-accessToken']}).
            exec();

        if (data){
            console.log(data.ownerId._id)
            return data;

        }
        else
            return new Error('Eerrrrrrrrrrrr')
    },updateBill:async function updateBill(schema,criteria,projection,option){
        try {
            var bill=await schema.findOneAndUpdate(criteria,projection,option);
            return bill
        } catch (error) {
            throw error;
        }
    }
}