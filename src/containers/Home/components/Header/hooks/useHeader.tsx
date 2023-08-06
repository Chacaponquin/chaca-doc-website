import { useState } from "react";
import toast from "react-hot-toast";

export function useHeader() {
  const [showCheckCopy, setShowCheckCopy] = useState(false);

  const COMMAND_TEXT = "$ npm install chaca";

  function handleClickCopyCommand() {
    navigator.clipboard.writeText("npm install chaca");
    toast.success("Copy to clipboard.");

    setShowCheckCopy(true);
    setTimeout(() => {
      setShowCheckCopy(false);
    }, 3000);
  }

  return { COMMAND_TEXT, handleClickCopyCommand, showCheckCopy };
}
