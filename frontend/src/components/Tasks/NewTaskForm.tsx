import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, TextInput, Textarea } from "@mantine/core";
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
  
  const [date, setDate] = useState<Date | null>(null);
  const { register, handleSubmit, reset, formState } = useForm<NewTaskFormType>({
    resolver: zodResolver(newTaskSchema),
  });

  const onSubmitHandler = (data: NewTaskFormType) => {
    close()
    reset()
    submitHandler({...data, dueDate: date ?? undefined})
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add new task" centered>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <TextInput
            {...register("name")}
            maxLength={50}
            type="text"
            error={formState.errors.name?.message}
            placeholder="Enter your task"
            label="Task name"
            withAsterisk
          />
          <Textarea
            {...register("description")}
            sx={{borderColor: "#027148"}}
            maxLength={500}
            error={formState.errors.description?.message}
            placeholder="Describe your task"
            label="Description"
          />
          <DateInput
            
            allowDeselect
            valueFormat="DD-MM-YYYY"
            value={date}
            onChange={setDate}
            label="Due date"
            placeholder="Select due date for the task"
            mb={"1vh"}
          />
          <Button bg={"#027148"} sx={{"&:hover": {backgroundColor: "#027148"}}} w={"100%"} type="submit">Add Task</Button>
        </form>
      </Modal>
    </>
  );
};

export default NewTask;
