import InputText from "./input-text";
import InputAreaText from "./input-areatext";

export default function EmporyForm() {
  return (
    <form className="w-full flex flex-col gap-4">
      <InputText
        labelText="Nome da empresa"
        placeholder="Qual o nome da empresa"
        id="name"
        name="empory"
      />
      <InputText
        labelText="Número de funcionários"
        placeholder="Digite seu numero de Colaboradores"
        id="workes"
        name="empory"
      />
      <InputAreaText
        labelText="Sobre seu negócio"
        placeholder="Fale um pouco sobre seus produtos ou serviços"
        id="desc"
        name="empory"
      />
    </form>
  );
}
