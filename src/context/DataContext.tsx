import { createContext, useEffect } from "react";
import { Atencion } from "../Apps/Atencion/atencionSlice";
import useAtencion from "../Apps/Atencion/hooks/useAtencion";
import { UserAccountData } from "../Apps/Auth/authSlice";
import useAuth from "../Apps/Auth/hooks/useAuth";
import { Diagnostico } from "../Apps/Diagnostico/diagnosticoSlice";
import useDiagnostico from "../Apps/Diagnostico/hooks/useDiagnostico";
import useInformante from "../Apps/Informante/hooks/useInformante";
import { Informante } from "../Apps/Informante/informanteSlice";
import useMedico from "../Apps/Medico/hooks/useMedico";
import { Medico } from "../Apps/Medico/medicoSlice";
import usePaciente from "../Apps/Paciente/hooks/usePaciente";
import { Paciente } from "../Apps/Paciente/pacienteSlice";
import usePersonal from "../Apps/Personal/hooks/usePersonal";
import useUser from "../Apps/User/hooks/useUser";
import { User } from "../Apps/User/userSlice";

interface ValuesDataContext {
  user?: UserAccountData;
  medicos?: Medico[];
  loaderMedicos?: boolean;
  countMedicos?: number;

  pacientes?: Paciente[];
  loaderPacientes?: boolean;

  countPacientes?: number;
  loaderInformantes?: boolean;
  countInformantes?: number;
  informantes?: Informante[];

  personal: any;
  loaderPersonal?: boolean;
  countPersonal?: number;

  loaderDiagnosticos?: boolean;
  diagnosticos?: Diagnostico[];
  countDiagnosticos?: number;

  atenciones?: Atencion[];
  countAtenciones?: number;
  loaderAtenciones?: boolean;

  users?: User[];
  countUsers?: number;
  loadUsers?: boolean;
}

export const DataContext = createContext({} as ValuesDataContext);

const DataProvider = ({ children }: any) => {
  const { user, loadUserAccount, isAuthenticated, checkAuthenticated } =
    useAuth();
  const { loadAllMedicos, medicos, countMedicos, loaderMedicos } = useMedico();
  const { loadAllPacientes, pacientes, loaderPacientes, countPacientes } =
    usePaciente();
  const {
    loaderInformantes,
    countInformantes,
    loadAllInformantes,
    informantes,
  } = useInformante();
  const { loadAllPersonal, personal, loaderPersonal, countPersonal } =
    usePersonal();
  const {
    loadAllDiagnosticos,
    loaderDiagnosticos,
    diagnosticos,
    countDiagnosticos,
  } = useDiagnostico();

  const { loadAllAtenciones, atenciones, countAtenciones, loaderAtenciones } =
    useAtencion();

  const { users, countUsers, loadUsers, loadAllUsers } = useUser();
  useEffect(() => {
    checkAuthenticated();
    if (isAuthenticated) {
      loadAllUsers();
      loadUserAccount();
      loadAllMedicos();
      loadAllPacientes();
      loadAllInformantes();
      loadAllPersonal();
      loadAllDiagnosticos();
      loadAllAtenciones();
    }
    console.log("useEffect DataContext")
  }, [isAuthenticated]);

  const values: ValuesDataContext = {
    user,
    medicos,
    loaderMedicos,
    countMedicos,
    pacientes,
    loaderPacientes,
    countPacientes,

    loaderInformantes,
    countInformantes,
    informantes,
    loaderPersonal,
    countPersonal,
    personal,

    loaderDiagnosticos,
    diagnosticos,
    countDiagnosticos,

    atenciones,
    countAtenciones,
    loaderAtenciones,

    users,
    countUsers,
    loadUsers,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
