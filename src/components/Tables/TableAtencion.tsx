import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { MultiSelect } from "primereact/multiselect";

import { DataContext } from "@/src/context/DataContext";
import { UIContext } from "@/src/context/UIContext";
import { useContext, useState } from "react";
import ModalEdit from "../ModalEdit";
import Alert from "../alert";
export default function AtencionTable({
  isHidden = false,
}: {
  isHidden: boolean;
  }
) {
  const { atenciones, loaderAtenciones } = useContext(DataContext);

  const { setVisibleModalEdit, visibleModalEdit } = useContext(UIContext);
  const columns = [
    { field: "tipo_emergencia", header: "Tipo de Emergencia" },
    { field: "tipo_atencion", header: "Tipo de atención" },
    { field: "traslado", header: "Traslado" },
    { field: "direccion", header: "Dirección" },
    { field: "referencia", header: "Referencia" },
    { field: "sector", header: "Sector" },
    { field: "sub_sector", header: "Sub Sector" },
    { field: "distrito", header: "Distrito" },
    { field: "provincia", header: "Provincia" },
    { field: "region", header: "Región" },
    { field: "hora_salida_ambulancia", header: "Hora de salida ambulancia" },
    { field: "hora_llegada", header: "Hora llegada ambulancia" },
    { field: "hora_llegada_EESS", header: "Hora llegada al EESS" },
    { field: "id_personal", header: "Cod. Personal" },
    { field: "id_medico", header: "Cod. Médico" },
    { field: "id_diagnostico", header: "Cod. Diagnóstico" },
    { field: "id_paciente", header: "Cod. Paciente" },
    { field: "id_informante_atencion", header: "Cod. Informante" },
  ];
  const [visibleColumns, setVisibleColumns] = useState(columns);


  const onColumnToggle = (event: any) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol: any) => sCol.field === col.field)
    );

    setVisibleColumns(orderedSelectedColumns);
  };

  const header = (
    <div
      onClick={() => {
        window.scrollTo({
          top: 240,
          behavior: "smooth",
        });
      }}
    >
      <MultiSelect
        value={visibleColumns}
        options={columns}
        optionLabel="header"
        onChange={onColumnToggle}
        className="w-full sm:w-20rem"
        display="chip"
      />
    </div>
  );

  return (
    <div className="card mt-4">
      <DataTable
        hidden={isHidden}
        header={header}
        scrollable
        value={atenciones}
        alwaysShowPaginator
        color="red"
        key={1}
        cellSelection
        rowHover
        stripedRows
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        
        selectOnEdit
        paginator
        dragSelection
        reorderableColumns
        rows={10}
        resizableColumns
        loading={loaderAtenciones}
        size="small"
        onCellClick={(e) => {
          setVisibleModalEdit(1);
        }}
        dataKey="id_atencion"
        emptyMessage="No hay datos."
      >
        {visibleColumns.map((col) => (
          <Column
            key={col.field}
            style={{ padding: "12px" }}
            sortable
            field={col.field}
            header={col.header}
          />
        ))}
      </DataTable>
      <Alert />
      <ModalEdit />
    </div>
  );
}
