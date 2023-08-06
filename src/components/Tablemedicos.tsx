import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { useContext } from "react";
import { useDispatch } from "react-redux";
import { REDUCER_LOAD_MESSAGE } from "../Apps/Messages/messageSlice";
import { DataContext } from "../context/DataContext";
import Alert from "./alert";
export default function TableMedico({
  isHidden = false,
}: {
  isHidden: boolean;
}) {
  const { medicos, loaderMedicos } = useContext(DataContext);
  const dispatch = useDispatch();
  return (
    <div className="card mt-4">
      <DataTable
        value={medicos}
        alwaysShowPaginator
        color="red"
        key={1}
        hidden={isHidden}
        cellSelection
        rowHover
        stripedRows
        selectOnEdit
        paginator
        dragSelection
        reorderableColumns
        rows={10}
        loading={loaderMedicos}
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
        dataKey="id_medico"
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
          field="n_colegiatura"
          sortable
          header="Colegiatura"
          style={{ padding: "12px" }}
        />
        <Column
          key={4}
          field="telefono"
          sortable
          header="Telefono"
          style={{ padding: "12px" }}
        />
        <Column
          key={5}
          field="activate"
          sortable
          header="Estado"
          style={{ padding: "12px" }}
        />
      </DataTable>
      <Alert />
    </div>
  );
}
