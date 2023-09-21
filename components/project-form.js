import InputText from "./input-text";
import InputAreaText from "./input-areatext";

export default function ProjectForm() {
  return (
    <form className="w-full flex flex-col gap-4">
      <InputAreaText
        labelText="Objetivos do projeto"
        placeholder="Descreva os objetivos desse projeto"
        id="objetive"
        name="project"
      />
    </form>
  );
}
