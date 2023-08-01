export function useHeader() {
  const COMMAND_TEXT = "$ npm install chaca";

  function handleClickCopyCommand() {
    navigator.clipboard.writeText("npm install chaca");
  }

  return { COMMAND_TEXT, handleClickCopyCommand };
}
