import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { DataContext } from "@/src/context/DataContext";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { REDUCER_LOAD_MESSAGE } from "../../Apps/Messages/messageSlice";
import Alert from "../alert";
export default function PacienteTable({
  isHidden = false,
}: {
  isHidden: boolean;
}) {
  const { pacientes, loaderPacientes } = useContext(DataContext);
  const dispatch = useDispatch();
  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  const columns = [
    {
      field: "nombres",
      header: "Nombres",
    },
    {
      field: "apellidos",
      header: "Apellidos",
    },
    {
      field: "genero",
      header: "Género",
    },
    {
      field: "dni",
      header: "DNI",
    },
    {
      field: "tipo_seguro",
      header: "Tipo de Seguro",
    },
    {
      field: "edad",
      header: "Edad",
    },
    {
      field: "prioridad_emergencia",
      header: "Prioridad Emergencia",
    },
    {
      field: "accidente",
      header: "Tuvo Accidente",
    },
    {
      field: "condicion_antes",
      header: "Condición Antes",
    },
    {
      field: "condicion_despues",
      header: "Condición Después",
    },
    {
      field: "tipo_seguro",
      header: "Tipo de Seguro",
    },
    {
      field: "tipo_edad",
      header: "Tipo de Edad",
    },
    {
      field: "telefono_paciente",
      header: "Teléfono",
    },
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
        scrollable
        hidden={isHidden}
        header={header}
        value={pacientes}
        alwaysShowPaginator
        onChange={onColumnToggle}
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
        loading={loaderPacientes}
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
        dataKey="paciente_id"
        emptyMessage="No hay datos."
      >
        {visibleColumns.map((col: any, index: any) => (
          <Column
            key={index}
            style={{ padding: "12px" }}
            sortable
            field={col.field}
            header={col.header}
          />
        ))}
      </DataTable>
      <Alert />
    </div>
  );
}
