import { useAlertToggle } from "./Alert/AlertContext";

export function Main() {
  const toggle = useAlertToggle();
  return (
    <>
      <h1>Привет в примере с context</h1>
      <button onClick={toggle}>Показать alert</button>
    </>
  )
}