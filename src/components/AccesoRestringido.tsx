export default function AccesoRestringido({ isHidden = false }: { isHidden?: boolean }) {
  if (isHidden) {
    return null;
  }
  return (
    <div
      style={{ height: "30vh" }}
      className={` flex items-center justify-center`}
    >
      <div className="flex flex-col flex items-center justify-center">
        <i
          style={{ fontSize: "3rem", color: "#9BABB8" }}
          className="pi pi-lock mb-2"
        >
          {" "}
        </i>
        <p className="font-bold" style={{ color: "#9BABB8" }}>
          ACCESO RESTRINGIDO
        </p>
      </div>
    </div>
  );
}
