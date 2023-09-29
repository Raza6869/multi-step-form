import { ProjectContext } from "./projectContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function ProjectProvider({ children }) {
  const projectUserFormsSchema = z.object({
    objectives: z
      .string()
      .nonempty("Objetivo do projeto é obrigatório")
      .min(20, "No mínimo 20 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(projectUserFormsSchema) });
  const onSubmit = (data) => console.log(data);

  return (
    <ProjectContext.Provider
      value={{ onSubmit, register, handleSubmit, formState: { errors } }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
