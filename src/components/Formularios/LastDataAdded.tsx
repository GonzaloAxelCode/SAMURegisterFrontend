import useDiagnostico from "@/src/Apps/Diagnostico/hooks/useDiagnostico";

const LastDataAdded = () => {
  const { diagnosticos ,countDiagnosticos } = useDiagnostico();
  return <div>{diagnosticos?.length}</div>;
};

export default LastDataAdded;
