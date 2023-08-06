import Layout from "@/src/components/Layout";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ApexChart = dynamic(() => import("@/src/components/Charts/BarChart"), {
  ssr: false,
});

const DonaChart = dynamic(() => import("@/src/components/Charts/DonouChart"), {
  ssr: false,
});

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout>
      <div className="flex w-full flex-col">
        <div className="mx-auto w-full max-w-md text-center">
          <p
            className="font-heading  font-medium leading-normal leading-normal mt-4"
            style={{ fontSize: "30px" }}
          >
            Dashboard
          </p>
          <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-400 mb-3 mt-1">
            Hey everyone, Iam a product manager from New York and Iam looking
            for new opportunities in the software business.
          </p>
          <div className="divide-muted-200 divide-muted-800 flex items-center justify-center divide-x">
            <div className="text-muted-400 flex h-8 items-center gap-1 px-4">
              <svg
                data-v-cd102a71=""
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon h-5 w-5"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M128 112a36 36 0 1 1 36-36a36 36 0 0 1-36 36Zm60 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36Zm-120 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36Z"
                    opacity=".2"
                  />
                  <path d="M172 76a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44Zm-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm60 24a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28ZM68 128a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28Z" />
                </g>
              </svg>
              <p className="font-sans text-sm font-normal leading-normal leading-normal">
                500+ registros
              </p>
            </div>
            <div className="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex">
              <svg
                data-v-cd102a71=""
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon h-5 w-5"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z"
                    opacity=".2"
                  />
                  <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full">{isClient && <ApexChart />}</div>
        <div className="w-[400px]">{isClient && <DonaChart />}</div>
      </div>
    </Layout>
  );
};

export default Dashboard;
