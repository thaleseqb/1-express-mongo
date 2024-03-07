import mongoose, {mongo} from "mongoose";

async function connectToDataBase() {
    mongoose.connect('mongodb+srv://admin:adminmongo@cluster0.xo5mptu.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0');
    return mongoose.connection;
};

export default connectToDataBase

