// app/dashboard/page.tsx


import { getUsers } from "@/api/services/core/users/get/get-users";
import { apiType } from "@/api/utils/apiType";
// export const dynamic = "force-dynamic";
export const revalidate = 10;

export default async function Dashboard() {
  const data = await getUsers({}, apiType("ssr"));

  // const data = await fetch("http://localhost:3001/users", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   cache: "no-store",
  // });
 
console.log(data);

  return (
    <div>
      {data?.data?.map((item, index) => <div key={index}>{item.username}</div>)}
    </div>
  );
}



// // app/dashboard/page.tsx
// import { getUsers } from "@/api/services/core/users/get/get-users";
// import { apiType } from "@/api/utils/apiType";
// import { unstable_cache } from "next/cache";

// export default async function Dashboard() {
//   const data = unstable_cache(
//     getUsers,
//     () => ["users"],
//     { revalidate: 10 }
//   );

//   // const data = await getUsers({}, apiType("isr", "10"));
//   // console.log(data);

//   return (
//     <div>
//       {data?.data?.map((item, index) => <div key={index}>{item.title}</div>)}
//     </div>
//   );
// }
