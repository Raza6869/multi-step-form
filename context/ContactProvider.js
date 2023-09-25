import { ContactContext } from "./contactContext";
import { useForm } from "react-hook-form";

export function ContactProvider({ children }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ContactContext.Provider
      value={{ onSubmit, register, handleSubmit, formState: { errors } }}
    >
      {children}
    </ContactContext.Provider>
  );
}
