import {useAlert } from "./AlertContext";

export function Alert() {
  const alert = useAlert;

  if (!alert) return null;

  return (
    <div>
      Это очень важное сообщение!
    </div>
  )
}