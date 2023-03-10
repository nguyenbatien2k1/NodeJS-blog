import mongoose from 'mongoose';

async function connect() {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        console.log('Connect Success!')
    }
    catch (error) {
        console.log('Connect Fail!')
    }
}

export default {connect}
