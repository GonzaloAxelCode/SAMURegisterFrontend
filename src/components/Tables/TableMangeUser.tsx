import useUser from "@/src/Apps/User/hooks/useUser";
import { User } from "@/src/Apps/User/userSlice";
import { DataContext } from "@/src/context/DataContext";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputSwitch } from "primereact/inputswitch";
import { Tag } from "primereact/tag";
import { useContext, useState } from "react";

export default function BasicDemo() {
  const { users, loadUsers, countUsers } = useContext(DataContext);
  const representativeBodyTemplate = (rowData: User) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          style={{ borderRadius: "50%" }}
          alt={rowData.first_name}
          src={`${rowData.photo_url}`}
          width="32"
        />
      </div>
    );
  };

  const bodyTemplateIsRegisterByGoogle = (rowData: User) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={rowData.first_name}
          src={`${
            rowData.is_registered_with_google
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              : "https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
          }`}
          width="32"
        />
      </div>
    );
  };

  const StatusBodyTemplate = (rowData: User) => {
    const [checked, setChecked] = useState<any>(rowData.desactivate_account);
    const email: any = rowData.email;
    const { grantPermissionWithEmail } = useUser();
    return (
      <div className="flex">
        <Tag
          style={{ width: "200px" }}
          value={checked ? "Permisos Denegados" : "Permisos Otorgados"}
          severity={checked ? "danger" : "success"}
        />

        <InputSwitch
          className="ml-3"
          checked={!checked}
          onChange={(e) => {
            setChecked(!checked);
            grantPermissionWithEmail(email, checked);
          }}
        />
      </div>
    );
  };

  return (
    <div className="card mt-4">
      <DataTable
        value={users}
        paginator
        size="small"
        rows={5}
        selectionMode="single"
        dataKey="id"
        loading={loadUsers}
        stateStorage="session"
        stateKey="dt-state-demo-local"
        emptyMessage="No customers found."
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="email"
          header="Email"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="nickname"
          header="Nickname"
          sortable
          sortField="nickname"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="first_name"
          header="Nombres "
          sortable
          sortField="representative.name"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="is_active"
          header="Estado Activo"
          body={(e: User) => (
            <span> {e.is_active ? "Activo" : "No disponible"}</span>
          )}
          sortable
          sortField="email"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="photo_url"
          header="Foto"
          body={representativeBodyTemplate}
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="is_registered_with_google"
          header="Modo de Authenticacion"
          body={bodyTemplateIsRegisterByGoogle}
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="desactivate_account"
          header="Permiso Activo del Usuario"
          body={StatusBodyTemplate}
          sortable
          style={{ width: "45%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
