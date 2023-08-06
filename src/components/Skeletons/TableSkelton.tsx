import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";

export default function TableSkeleton() {
  const items: any = Array.from({ length: 5 }, (v, i) => i);

  function bodyTemplate(): JSX.Element {
    return <Skeleton></Skeleton>;
  }

  return (
    <div className="card">
      <DataTable value={items} className="p-datatable-striped">
        <Column
          field="code"
          header="Loading ..."
          style={{ width: "25%" }}
          body={bodyTemplate}
        ></Column>
        <Column
          field="name"
          header="Loading ..."
          style={{ width: "25%" }}
          body={bodyTemplate}
        ></Column>
        <Column
          field="category"
          header="Loading ..."
          style={{ width: "25%" }}
          body={bodyTemplate}
        ></Column>
        <Column
          field="quantity"
          header="Loading ..."
          style={{ width: "25%" }}
          body={bodyTemplate}
        ></Column>
      </DataTable>
    </div>
  );
}
