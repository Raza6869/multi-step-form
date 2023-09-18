import ButtonItem from "./button-item";

export default function ButtonSection() {
  const back =
    "uppercase px-8 py-4 border-2 w-[158px] text-purple-mid font-bold border-purple-mid rounded-[6px]";
  const next =
    "uppercase px-8 py-4 bg-purple-mid  w-[158px] text-white font-bold rounded-[6px]";

  return (
    <div className="flex justify-between w-full">
      <ButtonItem name="voltar" style={back} />
      <ButtonItem name="continuar" style={next} />
    </div>
  );
}