import { serverOnly } from "@/utils/server-utils";

export default function ServerRoute() {
    const result = serverOnly();
  return (
    <div>ServerRoute Page {result}</div>
  )
}
