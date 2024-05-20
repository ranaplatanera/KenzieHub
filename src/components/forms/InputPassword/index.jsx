import { forwardRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import style from "./style.module.scss";

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <label className={style.label}>{label}</label>
      <div>
        <input className="input" type={isHidden ? "text" : "password"} ref={ref} {...rest} />
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});