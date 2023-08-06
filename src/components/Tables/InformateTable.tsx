import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import useInformante from "@/src/Apps/Informante/hooks/useInformante";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { REDUCER_LOAD_MESSAGE } from "../../Apps/Messages/messageSlice";
import Alert from "../alert";
export default function InformanteTable({
  isHidden = false,
}: {
  isHidden: boolean;
}) {
  const { informantes, loaderInformantes } = useInformante();
  const dispatch = useDispatch();
  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  return (
    <div className="card mt-4">
      <DataTable
        scrollable
        value={informantes}
        hidden={isHidden}
        alwaysShowPaginator
        color="red"
        key={22}
        rowHover
        stripedRows
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        selectOnEdit
        paginator
        dragSelection
        reorderableColumns
        rows={10}
        resizableColumns
        loading={loaderInformantes}
        size="small"
        onCellClick={(e) => {
          dispatch(
            REDUCER_LOAD_MESSAGE({
              show: true,
              severity: "success",
              text: "Con exito",
            })
          );
        }}
        dataKey="id_llamada"
        emptyMessage="No hay datos."
      >
        <Column
          key={1}
          field="nombres_infor"
          sortable
          header="Nombres "
          style={{ padding: "12px" }}
        />
        <Column
          key={2}
          field="apellidos_infor"
          sortable
          header="Apellidos"
          style={{ padding: "12px" }}
        />
        <Column
          key={3}
          field="dni_infor"
          sortable
          header="Dni"
          style={{ padding: "12px" }}
        />
        <Column
          key={4}
          field="gen_infor"
          sortable
          header="Genero"
          style={{ padding: "12px" }}
        />
        <Column
          key={4}
          field="telefono_infor"
          sortable
          header="Telefono del Informante"
          style={{ padding: "12px" }}
        />
        <Column
          key={4}
          field="tipo_llamada"
          sortable
          header="Tipo de Llamada"
          style={{ padding: "12px" }}
        />

        <Column
          key={4}
          field="fecha"
          sortable
          header="Fecha de Llamada"
          style={{ padding: "12px" }}
        />

        <Column
          key={4}
          field="hora"
          sortable
          header="Hora de Llamada"
          style={{ padding: "12px" }}
        />

        <Column
          key={4}
          field="turno"
          sortable
          header="Turno de  Llamada"
          style={{ padding: "12px" }}
        />

        <Column
          key={5}
          field="id_personal"
          sortable
          header="Cod.Personal Responsable"
          style={{ padding: "12px", width: "200px" }}
        />
      </DataTable>
      <Alert />
    </div>
  );
}
