const { EmporyContext } = require("@/context/emporyContext");
const { useContext } = require("react");

export function useEmporyContext() {
  const context = useContext(EmporyContext);

  if (context === undefined) {
    console.log("Não está dentro do contexto");
  }

  return context;
}
