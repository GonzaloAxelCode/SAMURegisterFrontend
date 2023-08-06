import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import Layout from "@/src/components/Layout";
import PerfilPage from "@/src/components/PerfilPage";
import TableManageUsers from "@/src/components/Tables/TableMangeUser";
import { Chip } from "primereact/chip";
import { Skeleton } from "primereact/skeleton";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";

const Perfil = () => {
  const { user, loadingLoadUser } = useAuth();
  const items = [
    { label: "Perfil", icon: "pi pi-fw pi-home" },

    { label: "Administrar usuarios", icon: "pi pi-fw pi-pencil" },
  ];

  !user?.is_superuser && items.pop();

  const [activeTabnumber, setActiveTabnumber] = useState(0);
  return (
    <Layout>
      <div className="p-6">
        <div className="ltablet:h-64 ltablet:flex-row relative flex w-full flex-col lg:flex-row">
          <div className="ltablet:flex-row relative z-1 flex w-full flex-col gap-6 lg:flex-row">
            {!loadingLoadUser && (
              <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-28 w-28 rounded-full ltablet:mx-0 mx-auto lg:mx-0">
                <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                  <img
                    src={user?.photo_url}
                    className="max-h-full max-w-full object-cover shadow-sm dark:border-transparent h-28 w-28"
                    alt=""
                  />
                </div>

                <div className="dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white h-10 w-10 bottom-0 end-0">
                  <img
                    src={user?.photo_url}
                    className="relative h-full w-full scale-90 rounded-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            )}
            {/*  eskeleton */}
            {loadingLoadUser && (
              <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-28 w-28 rounded-full ltablet:mx-0 mx-auto lg:mx-0">
                <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300 rounded-full">
                  <Skeleton width="112px" height="112px" borderRadius="100px" />
                </div>

                <div className=" absolute z-10 block overflow-hidden rounded-full bg-white p-1 bottom-1 end-0">
                  <Skeleton width="36px" height="36px" borderRadius="100px" />
                </div>
              </div>
            )}
            {/*  eskeleton */}

            <div className="ltablet:text-left text-center lg:text-left ">
              {!loadingLoadUser && (
                <span
                  className="text-muted-400 font-bold mb-4 block font-sans text-base"
                  style={{ fontSize: "1.6rem" }}
                >
                  {" "}
                  {user?.nickname}
                </span>
              )}
              {loadingLoadUser && (
                <span
                  className="text-muted-400 font-bold mb-4 block font-sans text-base"
                  style={{ fontSize: "1.6rem" }}
                >
                  <Skeleton
                    width="12rem"
                    height="2rem"
                    className="mt-1"
                  ></Skeleton>
                </span>
              )}
              <div className="mb-6 flex items-center gap-x-6 flex-wrap">
                <div className="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row">
                  {!loadingLoadUser && (
                    <span className="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base">
                      {" "}
                      ♣ {user?.email}
                    </span>
                  )}
                  {loadingLoadUser && (
                    <span className="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base">
                      <Skeleton width="10rem" className="mt-1"></Skeleton>
                    </span>
                  )}
                </div>
                <div className="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row">
                  {!loadingLoadUser && (
                    <span className="text-muted-800 dark:text-muted-100 font-semibold">
                      ♣ {user?.first_name}{" "}
                    </span>
                  )}

                  {loadingLoadUser && (
                    <span className="text-muted-800 dark:text-muted-100 font-semibold">
                      <Skeleton width="8rem" className="mt-1"></Skeleton>
                    </span>
                  )}
                </div>
                <div className="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row">
                  {loadingLoadUser && (
                    <span className="text-muted-800 dark:text-muted-100 font-semibold">
                      {user?.last_name}{" "}
                    </span>
                  )}
                  {loadingLoadUser && (
                    <span className="text-muted-800 dark:text-muted-100 font-semibold">
                      <Skeleton width="8rem" className="mt-1"></Skeleton>
                    </span>
                  )}
                </div>
              </div>
              <div className="prose prose-primary prose-muted dark:prose-invert prose-th:p-4 prose-td:p-4 prose-table:bg-white dark:prose-table:bg-muted-800 prose-table:border prose-table:border-muted-200 dark:prose-table:border-muted-700 ltablet:mx-0 prose-sm mx-auto mb-6 max-w-xl lg:mx-0"></div>

              {!loadingLoadUser && (
                <div className="card flex flex-wrap gap-2">
                  {user?.is_superuser ? (
                    <Chip label="Administrador" icon="pi pi-lock-open" />
                  ) : user?.desactivate_account ? (
                    <Chip label="Usuario Autorizado" icon="pi pi-lock-open" />
                  ) : (
                    <Chip label="Usuario Generico" icon="pi pi-lock-open" />
                  )}
                </div>
              )}

              {loadingLoadUser && (
                <div className="card flex flex-wrap gap-2">
                  <Skeleton
                    width="12rem"
                    height="2.5rem"
                    borderRadius="30px"
                    className="mt-1"
                  ></Skeleton>
                </div>
              )}
            </div>
          </div>
          <div className="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start"></div>
        </div>
        <div className="card mt-5">
          <TabMenu
            onTabChange={(e) => setActiveTabnumber(e.index)}
            model={items}
            activeIndex={activeTabnumber}
          />
        </div>
        <div className="w-full">
          <div className={`${activeTabnumber === 0 ? "" : "hidden"}`}>
            <PerfilPage />
          </div>
          <div className={`${activeTabnumber === 1 ? "" : "hidden"}`}>
            <TableManageUsers />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Perfil;
