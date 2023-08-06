import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { useDispatch } from "react-redux";
import { REDUCER_LOAD_MESSAGE } from "../../Apps/Messages/messageSlice";

import { DataContext } from "@/src/context/DataContext";
import { useContext } from "react";
import Alert from "../alert";
export default function DiagnosticoTable({
  isHidden = true,
}: {
  isHidden: boolean;
}) {
  const { loaderDiagnosticos, diagnosticos } = useContext(DataContext);
  const dispatch = useDispatch();
  return (
    <div className="card mt-4">
      <DataTable
        scrollable
        value={diagnosticos}
        alwaysShowPaginator
        hidden={isHidden}
        color="red"
        cellSelection
        rowHover
        stripedRows
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginator
        dragSelection
        reorderableColumns
        rows={10}
        resizableColumns
        loading={loaderDiagnosticos}
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
        dataKey="id_diagnostico"
        emptyMessage="No hay datos."
      >
        <Column
          key={4}
          field="codigo"
          sortable
          header="Codigo Diagnostico"
          style={{ padding: "12px" }}
        />
        <Column
          key={1}
          field="condicion_antes"
          sortable
          header="Condicion Antes"
          style={{ padding: "12px" }}
        />
        <Column
          key={2}
          field="observaciones"
          sortable
          header="Observaciones"
          style={{ padding: "12px" }}
        />
        <Column
          key={3}
          field="condicion_despues"
          sortable
          header="Condicion Despues"
          style={{ padding: "12px" }}
        />
        <Column
          key={4}
          field="derivado_EESS"
          sortable
          header="Derivado EESS"
          style={{ padding: "12px" }}
        />
        <Column
          key={4}
          field="derivado_medico"
          sortable
          header="Derivado Medico"
          style={{ padding: "12px" }}
        />
      </DataTable>
      <Alert />
    </div>
  );
}
