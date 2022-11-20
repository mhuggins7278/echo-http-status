import type { Context } from "https://edge.netlify.com";
import { Status, isSuccessfulStatus, isRedirectStatus } from "https://deno.land/std@0.165.0/http/http_status.ts";
export default (request: Request, context: Context): Response => {
  const url = new URL(request.url)
  const pathNameParts: string[] = url.pathname.split('/')
  const statusCode: number | undefined = parseInt(pathNameParts.at(-1))

  return new Response(`Redirect by ${Status[statusCode]}`, {
    headers: { "Allow-Access-Control-Origin": "*" },
  })
}
