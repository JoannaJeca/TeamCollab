import {model, Schema, Document} from "mongoose";

interface iTask{
    companyName: string;
    location: string;
    staff: string;
    task: number
};

interface iTaskTodo extends iTask, Document{};

const taskTodo = new Schema<iTaskTodo>(
    {
        companyName:{
            type: String
        },
        location:{
            type: String
        },
        staff:{
            type: String
        },
        task:{
            type: Number
        },
    },
    {timestamps: true}
);
export default model<iTaskTodo>("Task", taskTodo);