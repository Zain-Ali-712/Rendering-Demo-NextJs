import { cookies } from "next/headers"

export default async function About() {

    const storeCookies = await cookies();
    const theme = storeCookies.get("theme");
    console.log(theme);
    console.log("About Server Component");
  return (
    <h1>About Time {new Date().toLocaleTimeString()}</h1>
  );
}
