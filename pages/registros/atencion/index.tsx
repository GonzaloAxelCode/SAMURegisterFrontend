import useAtencion from "@/src/Apps/Atencion/hooks/useAtencion";
import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import AccesoRestringido from "@/src/components/AccesoRestringido";
import FormularioAtencion from "@/src/components/Formularios/FormAtencion";
import Layout from "@/src/components/Layout";
import LayoutRegistro from "@/src/components/LayoutRegistro";
import TableSkeleton from "@/src/components/Skeletons/TableSkelton";
import AtencionTable from "@/src/components/Tables/TableAtencion";
import { Dialog } from "primereact/dialog";
import { ToggleButton } from "primereact/togglebutton";
import { useEffect, useState } from "react";
const AtencionRegister = () => {
  const [activeTabnumber, setActiveTabnumber] = useState(0);
  useEffect(() => {
    if (activeTabnumber === 1) {
      window.scrollTo({
        top: 240,
        behavior: "smooth",
      });
    }
  }, [activeTabnumber]);

  const { countAtenciones, loaderAtenciones } = useAtencion();
  const { has_permissions } = useAuth();
  const items: any = [
    {
      label: "Lista de Atenciones",
      icon: "pi pi-fw pi-home",
      index: 0,
    },

    {
      label: "Añadir una Atencion",
      icon: "pi pi-fw pi-pencil",
      index: 1,
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <LayoutRegistro
        backgroundColor="#3DB2FF"
        titleBanner="Registro del Atenciones"
        descriptionBanner="En esta seccion se registra las Atenciones"
        imageSvgUrl="https://tairo.cssninja.io/img/illustrations/dashboards/health/doctor.svg"
        countRegisters={countAtenciones}
        countIncatives={0}
        navbarRegisterItems={items}
        setActiveTabnumber={(e: any) => {
          console.log(e);
          setActiveTabnumber(e.index);
        }}
        activeTabNumber={activeTabnumber}
      >
        <div className={`${activeTabnumber === 0 ? "" : "hidden"}`}>
          {loaderAtenciones && <TableSkeleton />}
          {!loaderAtenciones && (
            <div>
               <ToggleButton
                checked={false}
                onChange={() => setVisible(true)}
                onIcon="pi pi-lock"
                offIcon="pi pi-lock-open"
                onLabel="Maximizar"
                offLabel="Maximizar"
              />
              <AtencionTable isHidden={has_permissions === true} />

              <Dialog
                header="Header"
                visible={visible}
                maximizable
                maximized={true}
                onHide={() => setVisible(false)}
                onMaximize={() => null}
              >

              <AtencionTable isHidden={has_permissions === true} />
              </Dialog>
              <AccesoRestringido isHidden={!has_permissions === true} />
            </div>
          )}
        </div>
        <div className={`${activeTabnumber === 1 ? "" : "hidden"}`}>
          <FormularioAtencion isHidden={has_permissions === true} />
          <AccesoRestringido isHidden={!has_permissions === true} />
        </div>
      </LayoutRegistro>
    </Layout>
  );
};

export default AtencionRegister;
