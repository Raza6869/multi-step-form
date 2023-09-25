import { useProjectContext } from "@/hooks/useProjectContext";
import ButtonSection from "./buttons-section";

export default function ProjectForm() {
  const { register, handleSubmit, onSubmit } = useProjectContext();

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label for="objective" className="font-bold">
          Objetivos do projeto
        </label>
        <textarea
          placeholder="Descreva quais os objetivos desse projeto"
          id="objective"
          name="project"
          className="input-area-text"
          {...register("objectives")}
        />
        <ButtonSection />
      </div>
    </form>
  );
}
