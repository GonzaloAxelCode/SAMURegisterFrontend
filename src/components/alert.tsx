import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { REDUCER_LOAD_MESSAGE } from "../Apps/Messages/messageSlice";
import { RootState } from "../modern_redux/store";
export default function Alert() {
  const toastRef = useRef<any>(null);
  const dispatch = useDispatch();

  const { severity, text, show } = useSelector(
    (state: RootState) => state.Message
  );

  useEffect(() => {
    if (show) {
      toastRef.current.show({
        severity,
        summary: text,
        detail: text,
      });
      setTimeout(() => {
        dispatch(
          REDUCER_LOAD_MESSAGE({
            show: false,
          })
        );
      }, 1000);
    }
  }, [show]);
  return (
    <div>
      <div className="card flex justify-content-center">
        <Toast style={{ opacity: "100%" }} ref={toastRef}></Toast>
      </div>
    </div>
  );
}
