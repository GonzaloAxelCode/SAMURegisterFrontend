import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import usePersonal from "@/src/Apps/Personal/hooks/usePersonal";
import AccesoRestringido from "@/src/components/AccesoRestringido";
import FormularioPersonal from "@/src/components/Formularios/FormPersonal";
import Layout from "@/src/components/Layout";
import LayoutRegistro from "@/src/components/LayoutRegistro";
import TableSkeleton from "@/src/components/Skeletons/TableSkelton";
import TablePersonal from "@/src/components/Tables/TablePersonal";
import { Dialog } from "primereact/dialog";
import { ToggleButton } from "primereact/togglebutton";
import { useState } from "react";
const PersonalRegister = () => {
  const [activeTabnumber, setActiveTabnumber] = useState(0);
  const { has_permissions } = useAuth();
  const { countPersonal, loaderPersonal } = usePersonal();
  const items: any = [
    {
      label: "Lista de persnal ",
      icon: "pi pi-fw pi-home",
      index: 0,
    },

    {
      label: "Añadir  Personal",
      icon: "pi pi-fw pi-pencil",
      index: 1,
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <LayoutRegistro
        backgroundColor="#DB005B"
        titleBanner="Registro del Personal"
        descriptionBanner="En esta seccion se administra al Personal."
        imageSvgUrl="https://tairo.cssninja.io/img/illustrations/dashboards/health/doctor.svg"
        countRegisters={countPersonal}
        countIncatives={12}
        navbarRegisterItems={items}
        setActiveTabnumber={(e: any) => {
          console.log(e);
          setActiveTabnumber(e.index);
        }}
        activeTabNumber={activeTabnumber}
      >
        <div className={`${activeTabnumber === 0 ? "" : "hidden"}`}>
          {loaderPersonal && <TableSkeleton />}
          {!loaderPersonal && (
            <div>
              <ToggleButton
                checked={false}
                onChange={() => setVisible(true)}
                onIcon="pi pi-lock"
                offIcon="pi pi-lock-open"
                onLabel="Maximizar"
                offLabel="Maximizar"
              />
              <TablePersonal isHidden={has_permissions === true} />
              <Dialog
                header="Header"
                visible={visible}
                maximizable
                maximized={true}
                onHide={() => setVisible(false)}
                onMaximize={() => null}
              >
                <TablePersonal isHidden={has_permissions === true} />
              </Dialog>
              <AccesoRestringido isHidden={!has_permissions === true} />
            </div>
          )}
        </div>
        <div className={`${activeTabnumber === 1 ? "" : "hidden"}`}>
          <FormularioPersonal isHidden={has_permissions === true} />
          <AccesoRestringido isHidden={!has_permissions === true} />
        </div>
      </LayoutRegistro>
    </Layout>
  );
};

export default PersonalRegister;
