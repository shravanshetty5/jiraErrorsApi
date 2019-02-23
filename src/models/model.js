import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const JiraSchema = new Schema({
    jiraId: {
        type: Number,
        trim: true,
        required: 'Jira Number Required',
        unique: true
    },
    issue: {
        type: String,
        lowercase: true,
        trim: true
    },
    type: {
        type: String,
        lowercase: true,
        trim: true,
        required: 'Jira Type is required'
    },
    timeOfOccurance: {
        type: String,
        lowercase: true,
        trim: true
    },
    modelId: {
        type: String,
        trim: true
    },
    component: {
        type: String,
        trim: true
    },
    logData: {
        type: String,
        trim: true
    },
    dateTime: {
        type: Date,
        default: Date.now
    }
});

