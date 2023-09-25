import { useContactContext } from "@/hooks/useContactContext";
import InputText from "./input-text";

export default function ContactForm() {
  const { register } = useContactContext();

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
