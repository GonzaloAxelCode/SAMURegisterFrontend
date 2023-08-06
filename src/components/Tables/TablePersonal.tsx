import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { REDUCER_LOAD_MESSAGE } from "../../Apps/Messages/messageSlice";

import { DataContext } from "@/src/context/DataContext";
import { useContext } from "react";
import Alert from "../alert";
export default function TablePersonal({
  isHidden = false,
}: {
  isHidden: boolean;
  }) {
  const { personal, loaderPersonal } = useContext(DataContext);
  const dispatch = useDispatch();
  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;
  return (
    <div className="card mt-4">
      <DataTable
        scrollable
        value={personal}
        hidden={isHidden}
        alwaysShowPaginator
        color="red"
        key={1}
        cellSelection
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
        loading={loaderPersonal}
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
        dataKey="id_personal"
        emptyMessage="No hay datos."
      >
        <Column
          key={1}
          field="nombres"
          sortable
          header="Nombres"
          style={{ padding: "12px" }}
        />
        <Column
          key={2}
          field="apellidos"
          sortable
          header="Apellidos"
          style={{ padding: "12px" }}
        />
        <Column
          key={3}
          field="turno"
          sortable
          header="Turno"
          style={{ padding: "12px" }}
        />
        <Column
          key={4}
          field="dni"
          sortable
          header="Dni"
          style={{ padding: "12px" }}
        />
        <Column
          key={5}
          field="salida_cantidad"
          sortable
          dataType="numeric"
          header="Cantidad de salidas"
          style={{ padding: "12px", width: "200px" }}
        />
      </DataTable>
      <Alert />
    </div>
  );
}
