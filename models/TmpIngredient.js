var mongoose = require('mongoose');

var TmpIngredientSchema = new mongoose.Schema({
    name: { type:String, unique:true },
});

// save this as a model so we can access it
mongoose.model('TmpIngredient', TmpIngredientSchema);