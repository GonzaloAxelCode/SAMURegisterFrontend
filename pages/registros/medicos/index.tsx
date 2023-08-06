import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import useMedico from "@/src/Apps/Medico/hooks/useMedico";
import AccesoRestringido from "@/src/components/AccesoRestringido";
import FormularioMedico from "@/src/components/Formularios/FormMedico";
import Layout from "@/src/components/Layout";
import LayoutRegistro from "@/src/components/LayoutRegistro";
import TableSkeleton from "@/src/components/Skeletons/TableSkelton";
import TableMedicos from "@/src/components/Tablemedicos";
import { Dialog } from "primereact/dialog";
import { ToggleButton } from "primereact/togglebutton";
import { useEffect, useState } from "react";

const MedicosRegister = () => {
  const [activeTabnumber, setActiveTabnumber] = useState(0);
  const { countMedicos, loaderMedicos } = useMedico();
  useEffect(() => {
    if (activeTabnumber === 1) {
      window.scrollTo({
        top: 240,
        behavior: "smooth",
      });
    }
  }, [activeTabnumber]);
  const { has_permissions } = useAuth();
  const items: any = [
    {
      label: "Lista de Medicos ",
      icon: "pi pi-fw pi-home",
      index: 0,
    },

    {
      label: "Añadir  Medicos",
      icon: "pi pi-fw pi-pencil",
      index: 1,
    },
  ];
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <LayoutRegistro
        backgroundColor="#FFA41B"
        titleBanner="Registro de Medicos"
        descriptionBanner="En esta seccion se administra los Medicos"
        imageSvgUrl="https://tairo.cssninja.io/img/illustrations/dashboards/health/doctor.svg"
        countRegisters={countMedicos}
        countIncatives={0}
        navbarRegisterItems={items}
        setActiveTabnumber={(e: any) => {
          console.log(e);
          setActiveTabnumber(e.index);
        }}
        activeTabNumber={activeTabnumber}
      >
        <div className={`${activeTabnumber === 0 ? "" : "hidden"}`}>
          {loaderMedicos && <TableSkeleton />}
          {!loaderMedicos && (
            <div>
              <ToggleButton
                checked={false}
                onChange={() => setVisible(true)}
                onIcon="pi pi-lock"
                offIcon="pi pi-lock-open"
                onLabel="Maximizar"
                offLabel="Maximizar"
              />

              <TableMedicos isHidden={has_permissions === true} />

              <Dialog
                header="Header"
                visible={visible}
                maximizable
                maximized={true}
                onHide={() => setVisible(false)}
                onMaximize={() => null}
              >
                <TableMedicos isHidden={has_permissions === true} />
              </Dialog>

              <AccesoRestringido isHidden={!has_permissions === true} />
            </div>
          )}
        </div>
        <div className={`${activeTabnumber === 1 ? "" : "hidden"}`}>
          <FormularioMedico isHidden={has_permissions === true} />
          <AccesoRestringido isHidden={!has_permissions === true} />
        </div>
      </LayoutRegistro>
    </Layout>
  );
};

export default MedicosRegister;
