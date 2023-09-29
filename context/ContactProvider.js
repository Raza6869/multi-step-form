import { ContactContext } from "./contactContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function ContactProvider({ children }) {
  const contactUserFormsSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    phone: z.string().nonempty("Telefone é obrigatório"),
    mail: z
      .string()
      .email("O e-mail não e compatível")
      .nonempty("O e-mail é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactUserFormsSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <ContactContext.Provider
      value={{ onSubmit, register, handleSubmit, formState: { errors } }}
    >
      {children}
    </ContactContext.Provider>
  );
}
