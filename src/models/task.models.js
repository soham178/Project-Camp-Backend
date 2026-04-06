import mongoose, { Schema } from "mongoose";
import {AvailableTaskStatues, TaskStatusEnum} from "../utils/constants.js";


const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    project: {
        typr: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    assignedTo: {
        typr: Schema.Types.ObjectId,
        ref: "User",
    },
    assignedBy: {
        typr: Schema.Types.ObjectId,
        ref: "user",
    },
    status:{
        type: String,
        enum: AvailableTaskStatues,
        default: TaskStatusEnum.TODO
    },
    attachments: {
        type: [{
            url: String,
            mimetype: String,
            size: Number
        }],
        deafult: []
    }
},{timestapms: true})

export const task = mongoose.model("Task", taskSchema)