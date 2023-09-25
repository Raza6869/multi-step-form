const { ContactContext } = require("@/context/contactContext");
const { useContext } = require("react");

export function useContactContext() {
  const context = useContext(ContactContext);

  if (context === undefined) {
    console.log("Não está dentro do contexto");
  }

  return context;
}
