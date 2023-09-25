const { ProjectContext } = require("@/context/projectContext");
const { useContext } = require("react");

export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    console.log("Não está dentro do contexto");
  }

  return context;
}
