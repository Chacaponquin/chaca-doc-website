import toast from "react-hot-toast";

export function useHeader() {
  const COMMAND_TEXT = "$ npm install chaca";

  function handleClickCopyCommand() {
    navigator.clipboard.writeText("npm install chaca");
    toast.success("Copy to clipboard.");
  }

  return { COMMAND_TEXT, handleClickCopyCommand };
}
