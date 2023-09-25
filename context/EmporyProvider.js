import { EmporyContext } from "./emporyContext";
import { useForm } from "react-hook-form";

export function EmporyProvider({ children }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <EmporyContext.Provider
      value={{ onSubmit, register, handleSubmit, formState: { errors } }}
    >
      {children}
    </EmporyContext.Provider>
  );
}
