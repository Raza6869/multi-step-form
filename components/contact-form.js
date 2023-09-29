import { useContactContext } from "@/hooks/useContactContext";
import ButtonSection from "@/components/buttons-section";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
  } = useContactContext();

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
          className={errors.name ? "input-text-error" : "input-text"}
          {...register("name")}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
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
          className={errors.phone ? "input-text-error" : "input-text"}
          {...register("phone")}
        />
        {errors.phone && (
          <span className="error-message">{errors.phone.message}</span>
        )}
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
          className={errors.mail ? "input-text-error" : "input-text"}
          {...register("mail")}
        />
        {errors.mail && (
          <span className="error-message">{errors.mail.message}</span>
        )}
        <ButtonSection />
      </div>
    </form>
  );
}
