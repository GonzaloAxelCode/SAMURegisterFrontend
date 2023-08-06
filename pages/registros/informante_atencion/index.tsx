import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import useInformante from "@/src/Apps/Informante/hooks/useInformante";
import AccesoRestringido from "@/src/components/AccesoRestringido";
import FormularioInformante from "@/src/components/Formularios/FormInformante";
import Layout from "@/src/components/Layout";
import LayoutRegistro from "@/src/components/LayoutRegistro";
import TableSkeleton from "@/src/components/Skeletons/TableSkelton";
import InformanteTable from "@/src/components/Tables/InformateTable";
import { useEffect, useState } from "react";

import { Dialog } from "primereact/dialog";
import { ToggleButton } from "primereact/togglebutton";
const InformantelRegister = () => {
  const [activeTabnumber, setActiveTabnumber] = useState(0);
  const { has_permissions } = useAuth();
  const { countInformantes, loaderInformantes } = useInformante();
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
      label: "Lista de informantes",
      icon: "pi pi-fw pi-home",
      index: 0,
    },

    {
      label: "Añadir  un Informante",
      icon: "pi pi-fw pi-pencil",
      index: 1,
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <LayoutRegistro
        backgroundColor="#3DB2FF"
        titleBanner="Registro del los Informantes"
        descriptionBanner="En esta seccion se administra al las personas que informan una emergencia."
        imageSvgUrl="https://tairo.cssninja.io/img/illustrations/dashboards/health/doctor.svg"
        countRegisters={countInformantes}
        countIncatives={0}
        navbarRegisterItems={items}
        setActiveTabnumber={(e: any) => {
          console.log(e);
          setActiveTabnumber(e.index);
        }}
        activeTabNumber={activeTabnumber}
      >
        <div className={`${activeTabnumber === 0 ? "" : "hidden"}`}>
          {loaderInformantes && <TableSkeleton />}
          {!loaderInformantes && (
            <div>
              <ToggleButton
                checked={false}
                onChange={() => setVisible(true)}
                onIcon="pi pi-lock"
                offIcon="pi pi-lock-open"
                onLabel="Maximizar"
                offLabel="Maximizar"
              />
              <InformanteTable isHidden={has_permissions === true} />
              <Dialog
                header="Header"
                visible={visible}
                maximizable
                maximized={true}
                onHide={() => setVisible(false)}
                onMaximize={() => null}
              >
                <InformanteTable isHidden={has_permissions === true} />
              </Dialog>

              <AccesoRestringido isHidden={!has_permissions === true} />
            </div>
          )}
        </div>
        <div className={`${activeTabnumber === 1 ? "" : "hidden"}`}>
          <FormularioInformante isHidden={has_permissions === true} />
          <AccesoRestringido isHidden={!has_permissions === true} />
        </div>
      </LayoutRegistro>
    </Layout>
  );
};

export default InformantelRegister;
