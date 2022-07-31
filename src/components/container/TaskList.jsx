import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/Task';


const TaskList = () => {

    const defaultTask = new Task('Example', 'default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Change state of task');
    };

    return (
        <div>
            <div>
                Yur task:
            </div>
            <TaskComponent 
                task = {defaultTask}
            />
        </div>
    );
};

export default TaskList;
