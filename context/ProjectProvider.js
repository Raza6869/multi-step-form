import { ProjectContext } from "./projectContext";
import { useForm } from "react-hook-form";

export function ProjectProvider({ children }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ProjectContext.Provider
      value={{ onSubmit, register, handleSubmit, formState: { errors } }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
