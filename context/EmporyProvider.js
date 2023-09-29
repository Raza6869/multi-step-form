import { EmporyContext } from "./emporyContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function EmporyProvider({ children }) {
  const emporyUserFormSchema = z.object({
    enterpriseName: z.string().nonempty("Nome da empresa é obrigatório"),
    workersNumber: z
      .string()
      .nonempty("O número de colaboradores é obrigatório"),
    about: z
      .string()
      .nonempty("Fale um pouco sobre sua empresa")
      .min(10, "fale no mínimo 10 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolvers: zodResolver(emporyUserFormSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <EmporyContext.Provider
      value={{ onSubmit, register, handleSubmit, formState: { errors } }}
    >
      {children}
    </EmporyContext.Provider>
  );
}
