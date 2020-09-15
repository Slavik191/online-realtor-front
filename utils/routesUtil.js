import Router from "next/router";

export const toCabinet = (role) => {
  if(role === "admin"){
    return Router.push("/admin");
  }

  return Router.push("/realtor");
}