import InputText from "./input-text";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="w-full flex flex-col gap-4">
      <InputText
        labelText="Nome"
        placeholder="Como prefere ser chamado"
        id="name"
        name="contact"
        style="input-text"
        {...register("name", { required: true })}
      />
      <InputText
        labelText="Telefone"
        placeholder="Digite seu numero de WhatsApp"
        id="phone"
        name="contact"
        style="input-text"
        {...register("phone", { required: true })}
      />
      <InputText
        labelText="E-mail"
        placeholder="Digite seu e-mail"
        id="mail"
        name="contact"
        style="input-text"
        {...register("mail", { required: true })}
      />
    </form>
  );
}
