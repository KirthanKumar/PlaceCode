import React from "react";
import { useStore } from "effector-react";
import { Item, Select } from "@components/Inputs/Select";
import { Input } from "@components/Inputs/Input";
import { Editor } from "@components/Editor";
import { addForm } from "@pages/Tasks/model/addTask";

export const TopicSelect = () => {
  const topics = useStore(addForm.$topics);
  const value = useStore(addForm.$selectedTopic);

  return (
    <Select
      label="Тема"
      value={value ?? ""}
      onChange={(e) => addForm.topicChange(e.target.value)}
    >
      {topics.map((topic) => (
        <Item key={topic.id} value={topic.id}>
          {topic.name}
        </Item>
      ))}
    </Select>
  );
};

export const NameInput = () => {
  const name = useStore(addForm.$name);

  return (
    <Input
      value={name}
      onChange={(e) => addForm.nameChange(e.target.value)}
      label="Название задания"
    />
  );
};

export const DescriptionInput = () => {
  const description = useStore(addForm.$description);

  return <Editor content={description} onChange={addForm.descriptionChange} />;
};
