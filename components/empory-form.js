import { useEmporyContext } from "@/hooks/useEmporyContext";
import ButtonSection from "./buttons-section";

export default function EmporyForm() {
  const { register, handleSubmit, onSubmit } = useEmporyContext();

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label for="enterpriseName" className="font-bold">
          Nome da empresa
        </label>
        <input
          type="text"
          placeholder="Qual o nome da empresa"
          id="enterpriseName"
          name="empory"
          className="input-text"
          {...register("enterpriseName")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label for="workersNumber" className="font-bold">
          Número de funcionários
        </label>
        <input
          type="text"
          placeholder="Digite o número de colaboradores"
          id="workersNumber"
          name="empory"
          className="input-text"
          {...register("workersNumber")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label for="about" className="font-bold">
          Sobre seu negócio
        </label>
        <textarea
          placeholder="Fale um pouco sobre seus produtos ou serviços "
          id="about"
          name="empory"
          className="input-area-text"
          {...register("about")}
        />

        <ButtonSection />
      </div>
    </form>
  );
}
