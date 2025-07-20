import "server-only";

export const serverOnly = () =>{
    console.log(`
            use Multiple Libraries,
            interact with database,
            process confidential information
        `);
    return "Server Result";
}