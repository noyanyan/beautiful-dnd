import { Draggable } from "react-beautiful-dnd";

type Props = {
  task: {
    id: string;
    content: string;
  };
  index: number;
};
const Task = ({ task, index }: Props): JSX.Element => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        className="mb-2 p-2 border border-solid hover:border-gray-500 rounded transition duration-150 ease-in-out"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {task.content}
      </div>
    )}
  </Draggable>
);

export default Task;
