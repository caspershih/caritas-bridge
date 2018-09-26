var Charities = require("../../models/charity");

module.exports = {
    // This method handles retrieving all saved Charities from the db
    find: function(req, res) {
        console.log("Retrieving all saved charities.");
        Charities.find({}, function(err, docs) {
            if (err) {
                return res.send(err);
            }
            res.json(docs);
        });
    },
    // This method handles creating new Charities
    save: function(req, res) {
        console.log("Saving a new charity.");
        var newCharity = new Charities({
            name: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
            address1: {type: DataTypes.STRING, allowNull: false},
            address2: {type: DataTypes.STRING, allowNull: false},
            city: {type: DataTypes.STRING, allowNull: false},
            state: {type: DataTypes.STRING, allowNull: false},
            zip: {type: DataTypes.STRING, allowNull: false},
            category: {type: DataTypes.STRING, allowNull: false},
            webURL: {type: DataTypes.STRING, allowNull: false},
            email: {type: DataTypes.STRING, allowNull: false},
            ein: {type: DataTypes.INTEGER, allowNull: false}
        });
        newCharity.save(function(err) {
            if (err) {
                return res.send(err);
            }
            console.log("Save successful.");
            res.json(newCharity);
        });
    },
    // This method handles deleting Charities
    destroy: function (req, res) {
        console.log(`Removing charity with id ${req.query.id} from database.`);
        Charities.findByIdAndRemove(req.query.id, function (err) {
            if (err) {
                return res.send(err);
            }
            res.sendStatus(204);
        });
    }
};