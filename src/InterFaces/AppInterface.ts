export interface ITask {
	taskName: string;
	deadline: number;
}

export interface IHeaderProps {
	handleChange: (params: any) => any;
	task: string;
	deadline: number;
	addTask: () => any;
}

export interface ITaskList {
	todoLists: ITask[];
	completeTask(taskNameToDelete: string): void;
}
