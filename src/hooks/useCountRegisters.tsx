import useAtencion from "../Apps/Atencion/hooks/useAtencion";
import useDiagnostico from "../Apps/Diagnostico/hooks/useDiagnostico";
import useInformante from "../Apps/Informante/hooks/useInformante";
import useMedico from "../Apps/Medico/hooks/useMedico";
import usePaciente from "../Apps/Paciente/hooks/usePaciente";
import usePersonal from "../Apps/Personal/hooks/usePersonal";

const useCountRegisters = () => {
  const { countAtenciones } = useAtencion();
  const { countDiagnosticos } = useDiagnostico();
  const { countInformantes } = useInformante();
  const { countMedicos } = useMedico();
  const { countPacientes } = usePaciente();
  const { countPersonal } = usePersonal();

  return {
    countPersonal,
    countPacientes,
    countMedicos,
    countInformantes,
    countDiagnosticos,
    countAtenciones,
  };
};

export default useCountRegisters;
