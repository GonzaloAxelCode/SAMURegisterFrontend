import atencionSlice from "../Apps/Atencion/atencionSlice";
import authSlice from "../Apps/Auth/authSlice";
import diagnosticoSlice from "../Apps/Diagnostico/diagnosticoSlice";
import informanteSlice from "../Apps/Informante/informanteSlice";
import medicoSlice from "../Apps/Medico/medicoSlice";
import messageSlice from "../Apps/Messages/messageSlice";
import pacienteSlice from "../Apps/Paciente/pacienteSlice";
import personalSlice from "../Apps/Personal/personalSlice";
import userSlice from "../Apps/User/userSlice";

const Slices = {
  Medico: medicoSlice,
  Auth: authSlice,
  Message: messageSlice,
  Paciente: pacienteSlice,
  Informante: informanteSlice,
  Personal: personalSlice,
  Diagnostico: diagnosticoSlice,
  Atencion: atencionSlice,
  User: userSlice,
};

export default Slices;
