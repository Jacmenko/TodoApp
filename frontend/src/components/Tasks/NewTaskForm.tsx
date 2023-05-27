import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NewTaskFormType, onSubmitNewTask } from "../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { newTaskSchema } from "../../schemas/schemas";

interface INewTaskProps {
  opened: boolean,
  close: () => void,
  submitHandler: (data: NewTaskFormType) => void,
}

const NewTask: React.FC<INewTaskProps> = ({opened, close, submitHandler}) => {
  
  const [value, setValue] = useState<Date | null>(null);
  const { register, handleSubmit, formState } = useForm<NewTaskFormType>({
    resolver: zodResolver(newTaskSchema),
  });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <form onSubmit={handleSubmit(submitHandler)}>
          <TextInput
            {...register("name")}
            error={formState.errors.name?.message}
            placeholder="Enter your task"
            label="Task name"
            withAsterisk
          />
          <TextInput
            {...register("description")}
            error={formState.errors.description?.message}
            placeholder="Describe your task"
            label="Description"
          />
          <DateInput
            {...register("dueDate")}
            error={formState.errors.dueDate?.message}
            allowDeselect
            value={value}
            valueFormat="DD-MM-YYYY"
            onChange={setValue}
            label="Due date"
            placeholder="Select due date for the task"
            maw={400}
            mx="auto"
          />
          <Button w={"100%"} type="submit">Add Task</Button>
        </form>
      </Modal>
    </>
  );
};

export default NewTask;
