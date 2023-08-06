import { Skeleton } from "primereact/skeleton";

const TableLoadingTemplate = (options: any) => {
  return (
    <div
      className="flex align-items-center"
      style={{ height: "17px", flexGrow: "1", overflow: "hidden" }}
    >
      <Skeleton
        width={
          options.cellEven ? (options.field === "year" ? "30%" : "40%") : "60%"
        }
        height="1rem"
      />
    </div>
  );
};

export default TableLoadingTemplate;
