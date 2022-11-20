import type { Context } from "https://edge.netlify.com";
import { Status, isSuccessfulStatus, isRedirectStatus, isInformationalStatus } from "https://deno.land/std@0.165.0/http/http_status.ts";

export default (request: Request, context: Context): Response | undefined => {
  type GenericObj = { [key: string]: any };
  const url = new URL(request.url)
  const pathNameParts: string[] = url.pathname.split('/')
  const statusCode: number | undefined = parseInt(pathNameParts.at(-1))
  const redirectStatusCodesWithoutRedirect = [300, 304, 305]
  const responseCodesWithoutBody = [100, 204, 205]
  //get the content-type header from the request object
  const contentType = request.headers.get("content-type") || "text/plain";

  if (!statusCode){
    return 
  }


  if (isNaN(statusCode) || !Status[statusCode] || isInformationalStatus(statusCode)) {
    return new Response('Invalid Status Code', {
      headers: { "Allow-Access-Control-Origin": "*", "content-type": contentType },
      status: 404
    });
  }


  if (isRedirectStatus(statusCode) && !redirectStatusCodesWithoutRedirect.includes(statusCode)) {
    const redirectLocation = `${url.origin}/redirectPage${url.pathname}`
    return Response.redirect(redirectLocation, statusCode)
  }


  const excludeBodyStatusCodes = [...responseCodesWithoutBody, ...redirectStatusCodesWithoutRedirect]
  const excludeBody = excludeBodyStatusCodes.includes(statusCode)
  let resContent: string | GenericObj = `statusCode: ${Status[statusCode]}`
  if (contentType === 'application/json') {
    resContent = {'statusCode': Status[statusCode]}
  }
  const res = new Response(excludeBody ? null : JSON.stringify(resContent), {
    headers: { "Allow-Access-Control-Origin": "*", "content-type": contentType },
    status: statusCode
  });
  return res
}
