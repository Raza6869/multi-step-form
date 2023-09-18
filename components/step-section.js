import ArrowLeftIcon from "./arrow-left-icon";
import Steps from "./steps";

export default function StepSection() {
  return (
    <div className="flex justify-between items-center w-full">
      <Steps stepName="Contato" stepNumber="1" />
      <ArrowLeftIcon />
      <Steps stepName="Contato" stepNumber="2" />
      <ArrowLeftIcon />
      <Steps stepName="Contato" stepNumber="3" />
    </div>
  );
}
