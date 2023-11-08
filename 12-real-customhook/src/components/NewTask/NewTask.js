import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: "https://react-http-f1077-default-rtdb.firebaseio.com/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { text: taskText },
    }, createTask.bind(null, taskText)); // bind로 매개함수 끼워넣기 taskText를 bind로 끼워넣고 실제 사용되는 useHttp에서 taskData 받음
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
