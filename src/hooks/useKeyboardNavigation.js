import { useEffect } from "react";

export default function (
  ref,
  { handleArrowDownKey, handleArrowUpKey, handleEnterKey, handleEscapeKey }
) {
  useEffect(() => {
    const keydown = (e) => {
      switch (e.keyCode) {
        case 38:
          return handleArrowDownKey?.();
        case 40:
          return handleArrowDownKey?.();
        case 13:
          return handleEnterKey?.();
        case 27:
          return handleEscapeKey?.();
        default:
          return null;
      }
    };

    const currentRef = ref.current;
    currentRef.addEventListener("keydown", keydown);

    return () => currentRef.removeEventListener("keydown", keydown);
  }, [
    ref,
    handleArrowDownKey,
    handleArrowUpKey,
    handleEnterKey,
    handleEscapeKey,
  ]);
}
