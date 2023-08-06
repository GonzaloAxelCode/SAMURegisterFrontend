import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import useDiagnostico from "@/src/Apps/Diagnostico/hooks/useDiagnostico";
import AccesoRestringido from "@/src/components/AccesoRestringido";
import FormularioDiagnostico from "@/src/components/Formularios/FormDiagnostico";
import Layout from "@/src/components/Layout";
import LayoutRegistro from "@/src/components/LayoutRegistro";
import TableSkeleton from "@/src/components/Skeletons/TableSkelton";
import DiagnosticoTable from "@/src/components/Tables/TableDiagnostico";
import { Dialog } from "primereact/dialog";
import { ToggleButton } from "primereact/togglebutton";
import { useEffect, useState } from "react";
const DiagnosticoRegister = () => {
  const [activeTabnumber, setActiveTabnumber] = useState(0);
  useEffect(() => {
    if (activeTabnumber === 1) {
      window.scrollTo({
        top: 240,
        behavior: "smooth",
      });
    }
    console.log("useEffect diagostico index");
  }, [activeTabnumber]);

  const { countDiagnosticos, loaderDiagnosticos } = useDiagnostico();
  const { has_permissions } = useAuth();
  const items: any = [
    {
      label: "Lista de diagnosticos",
      icon: "pi pi-fw pi-home",
      index: 0,
    },

    {
      label: "Añadir  un diagnostico",
      icon: "pi pi-fw pi-pencil",
      index: 1,
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <LayoutRegistro
        backgroundColor="#3DB2FF"
        titleBanner="Registro del los diagnosticos"
        descriptionBanner="En esta seccion se administra al los diagnosticos de un Paciente."
        imageSvgUrl="https://tairo.cssninja.io/img/illustrations/dashboards/health/doctor.svg"
        countRegisters={countDiagnosticos}
        countIncatives={0}
        navbarRegisterItems={items}
        setActiveTabnumber={(e: any) => {
          console.log(e);
          setActiveTabnumber(e.index);
        }}
        activeTabNumber={activeTabnumber}
      >
        <div className={`${activeTabnumber === 0 ? "" : "hidden"}`}>
          {loaderDiagnosticos && <TableSkeleton />}
          {!loaderDiagnosticos && (
            <div>
          
              <ToggleButton
                checked={false}
                onChange={() => setVisible(true)}
                onIcon="pi pi-lock"
                offIcon="pi pi-lock-open"
                onLabel="Maximizar"
                offLabel="Maximizar"
              />
              <DiagnosticoTable isHidden={has_permissions === true} />
              <Dialog
                header="Header"
                visible={visible}
                maximizable
                maximized={true}
                onHide={() => setVisible(false)}
                onMaximize={() => null}
              >

              <DiagnosticoTable isHidden={has_permissions === true} />
              </Dialog>
              <AccesoRestringido isHidden={!has_permissions === true} />
            </div>
          )}
        </div>
        <div className={`${activeTabnumber === 1 ? "" : "hidden"}`}>
          <FormularioDiagnostico isHidden={has_permissions === true} />
          <AccesoRestringido isHidden={!has_permissions === true} />
        </div>
      </LayoutRegistro>
    </Layout>
  );
};

export default DiagnosticoRegister;
