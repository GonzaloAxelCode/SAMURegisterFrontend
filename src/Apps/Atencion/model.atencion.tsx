export interface AtencionAdd {
  tipo_emergencia?: string;
  tipo_atencion?: string;
  traslado?: false;
  direccion?: string;
  referencia?: string;
  sector?: string;
  sub_sector?: string;
  distrito?: string;
  provincia?: string;
  region?: string;
  hora_salida_ambulancia: null | string;
  hora_llegada: null | string;
  hora_salida: null | string;
  hora_llegada_EESS: null | string;
  id_personal?: number;
  id_medico?: number;
  id_diagnostico?: number;
  id_paciente?: number;
  id_informante_atencion?: number;
}
