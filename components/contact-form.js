import InputText from "./input-text";

export default function ContactForm() {
  return (
    <form className="w-full flex flex-col gap-4">
      <InputText
        labelText="Nome"
        placeholder="Como prefere ser chamado"
        id="name"
        name="contact"
      />
      <InputText
        labelText="Telefone"
        placeholder="Digite seu numero de WhatsApp"
        id="phone"
        name="contact"
      />
      <InputText
        labelText="E-mail"
        placeholder="Digite seu e-mail"
        id="mail"
        name="contact"
      />
    </form>
  );
}
