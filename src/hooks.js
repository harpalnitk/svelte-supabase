export const handle = async ({event,resolve})=>{
    const response = await resolve(event,{
       // ssr:false // will make entire website not to be server side rendered
       ssr: event.url.pathname == '/test' ? false : true
    });
    return response;
}