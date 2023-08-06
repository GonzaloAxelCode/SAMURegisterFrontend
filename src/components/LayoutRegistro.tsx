interface NavbarRegisterItems {
  label?: string;
  href?: string;
  icon?: string;
}

interface Props {
  imageSvgUrl?: string;
  titleBanner?: string;
  descriptionBanner?: string;
  countRegisters?: number;
  countIncatives?: number;
  navbarRegisterItems?: NavbarRegisterItems[];
  SvgComponent?: any;
  children?: any;
  activeTabNumber?: any;
  setActiveTabnumber?: any;
  backgroundColor?: any;
}
import { TabMenu } from "primereact/tabmenu";

const LayoutRegistro = ({
  imageSvgUrl,
  SvgComponent,
  titleBanner,
  descriptionBanner,
  countIncatives,
  countRegisters,
  backgroundColor = "#000",
  navbarRegisterItems,
  children,
  activeTabNumber,
  setActiveTabnumber,
}: Props) => {
  return (
    <div className="content-layout-registro">
      <div className="col-span-12 p-8">
        <div
          className="flex flex-col items-center rounded-2xl p-4 sm:flex-row"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="relative h-[168px] w-[280px] shrink-0">
            <img
              className="pointer-events-none absolute -start-6 -top-20 sm:-start-10"
              src={imageSvgUrl}
              alt={titleBanner}
            />
          </div>
          <div className="mt-6 grow sm:mt-0">
            <div className="text-center sm:text-left">
              <p className="font-heading text-2xl font-semibold leading-normal leading-normal text-white ">
                {/*[*/}
                <span>{titleBanner}</span>
                {/*]*/}
              </p>
              <p className="font-alt text-sm font-normal leading-normal leading-normal text-white opacity-90">
                {/*[*/}
                <span> {descriptionBanner}</span>
                {/*]*/}
              </p>
              <div className="mt-6 flex flex-wrap gap-y-6 pb-4 text-center sm:mt-4 sm:gap-x-8 sm:pb-0 sm:text-left">
                <div className="min-w-[33.3%] sm:min-w-0">
                  <p className="font-heading text-sm font-medium leading-normal leading-normal text-white">
                    {/*[*/}
                    <span className="">Registrados</span>
                    {/*]*/}
                  </p>
                  <p className="font-alt text-sm font-normal leading-normal leading-normal text-white opacity-70">
                    {/*[*/}
                    <span>{countRegisters}</span>
                    {/*]*/}
                  </p>
                </div>
                <div className="min-w-[33.3%] sm:min-w-0">
                  <p className="font-heading text-sm font-medium leading-normal leading-normal text-white ">
                    {/*[*/}
                    <span>Desabilitados</span>
                    {/*]*/}
                  </p>
                  <p className="font-alt text-sm font-normal leading-normal leading-normal text-white opacity-70">
                    {/*[*/}
                    <span>{countIncatives}</span>
                    {/*]*/}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card  mt-3">
          <TabMenu
            onTabChange={(e) => setActiveTabnumber(e)}
            activeIndex={activeTabNumber}
            model={navbarRegisterItems}
          />
        </div>
        <div className="content p-2">{children}</div>
      </div>
    </div>
  );
};

export default LayoutRegistro;
