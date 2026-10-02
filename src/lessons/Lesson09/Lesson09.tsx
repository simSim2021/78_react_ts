import { useState, type ChangeEvent } from "react";
import Input from "../../components/Input/Input";
import { ListTitle, PageWrapper, ToDoListWrapper } from "./styles";
import Button from "../../components/Button/Button";


function Lesson09() {
    //текущее значение input
  const [task, setTask] = useState<string>("");
  //массив всех добавленных задач
  const [tasks, setTasks] = useState<string[]>([]);

  //проерка поля на пустоту
  const addTask = () => {
    if (task.trim() === "") {
      alert("Введите задачу");
      return;
    }

    //добавляем новую задачу в начало массива
    setTasks([task, ...tasks]);
    //очищаем input
    setTask("");
  };

  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => setTask(event.target.value);

  const listPrint = tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ));

  return (
    <PageWrapper>
    <ToDoListWrapper>
      <ListTitle>ToDo List</ListTitle>

      <Input
        name="task"
        id="task"
        placeholder="Введите задачу"
        label="Новая задача"
        value={task}
        onChange={onChangeEvent}
      />

      <Button name="Добавить" onClick={addTask} />

      <ul>
        {listPrint}
      </ul>
    </ToDoListWrapper>
    </PageWrapper>
  );
}

export default Lesson09;