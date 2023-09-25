import { useContactContext } from "@/hooks/useContactContext";
import ButtonSection from "@/components/buttons-section";

export default function ContactForm() {
  const { register, handleSubmit, onSubmit } = useContactContext();

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label for="name" className="font-bold">
          Nome
        </label>
        <input
          type="text"
          placeholder="Como prefere ser chamado"
          id="name"
          name="contact"
          className="input-text"
          {...register("name")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label for="phone" className="font-bold">
          Telefone
        </label>
        <input
          type="text"
          placeholder="Digite seu número do Whatsapp"
          id="phone"
          name="contact"
          className="input-text"
          {...register("phone")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label for="mail" className="font-bold">
          E-mail
        </label>
        <input
          type="text"
          placeholder="Digite seu e-mail"
          id="mail"
          name="contact"
          className="input-text"
          {...register("mail")}
        />

        <ButtonSection />
      </div>
    </form>
  );
}
