import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import usePaciente from "@/src/Apps/Paciente/hooks/usePaciente";
import AccesoRestringido from "@/src/components/AccesoRestringido";
import FormularioPaciente from "@/src/components/Formularios/FormPaciente";
import Layout from "@/src/components/Layout";
import LayoutRegistro from "@/src/components/LayoutRegistro";
import TableSkeleton from "@/src/components/Skeletons/TableSkelton";
import PacienteTable from "@/src/components/Tables/PacienteTable";
import { Dialog } from "primereact/dialog";
import { ToggleButton } from "primereact/togglebutton";
import { useEffect, useState } from "react";
const PacientesRegister = () => {
  const [activeTabnumber, setActiveTabnumber] = useState(0);
  const { countPacientes, loaderPacientes } = usePaciente();
  const { has_permissions } = useAuth();
  useEffect(() => {
    if (activeTabnumber === 1) {
      window.scrollTo({
        top: 240,
        behavior: "smooth",
      });
    }
  }, [activeTabnumber]);
  const items: any = [
    {
      label: "Lista de Pacientes ",
      icon: "pi pi-fw pi-home",
      index: 0,
    },

    {
      label: "Añadir  Pacientes",
      icon: "pi pi-fw pi-pencil",
      index: 1,
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <LayoutRegistro
        backgroundColor="#22A699"
        titleBanner="Registro de Pacientes"
        descriptionBanner="En esta seccion se administra los Pacientes"
        imageSvgUrl="https://tairo.cssninja.io/img/illustrations/dashboards/health/doctor.svg"
        countRegisters={countPacientes}
        countIncatives={0}
        navbarRegisterItems={items}
        setActiveTabnumber={(e: any) => {
          console.log(e);
          setActiveTabnumber(e.index);
        }}
        activeTabNumber={activeTabnumber}
      >
        <div className={`${activeTabnumber === 0 ? "" : "hidden"}`}>
          {loaderPacientes && <TableSkeleton />}
          {!loaderPacientes && (
            <div>
              <ToggleButton
                checked={false}
                onChange={() => setVisible(true)}
                onIcon="pi pi-lock"
                offIcon="pi pi-lock-open"
                onLabel="Maximizar"
                offLabel="Maximizar"
              />
              <PacienteTable isHidden={has_permissions === true} />
              <Dialog
                header="Header"
                visible={visible}
                maximizable
                maximized={true}
                onHide={() => setVisible(false)}
                onMaximize={() => null}
              >
                <PacienteTable isHidden={has_permissions === true} />
              </Dialog>
              <AccesoRestringido isHidden={!has_permissions === true} />
            </div>
          )}
        </div>

        <div className={`${activeTabnumber === 1 ? "" : "hidden"}`}>
          <FormularioPaciente isHidden={has_permissions === true} />
          <AccesoRestringido isHidden={!has_permissions === true} />
        </div>
      </LayoutRegistro>
    </Layout>
  );
};

export default PacientesRegister;
