import mongoose from 'mongoose';
const TodoSchema = new mongoose.Schema({
    //title for the Todo Object
    title: {
        type: String,
        required: "Title is a required property."
    },
    //description for the Todo Object
    desc: {
        type: String
    },
    //createdOn for the Todo Object
    createdOn: {
        type: Date,
        default: Date.now
    },
    //lastModifiedDate for the Todo Object
    lastModified: {
        type: Date,
        default: Date.now
    }
},
{
    // timestamps: true,
    versionKey: false
}
);

//A virtual property named id will be copied and converted into hexa-decimal string
TodoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
TodoSchema.set('toJSON', { virtuals: true });

// const model = mongoose.model('TodoList', TodoSchema);
const model = mongoose.model('todo', TodoSchema);

export default model;
