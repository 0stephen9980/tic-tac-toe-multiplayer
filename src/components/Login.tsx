import React from "react";

// type props = {
//   onClick(event: any): void;
//   isVisible: boolean;
// };

// function Login({ isVisible, onClick }: props) {
//   if (!isVisible) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-slate-400 bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
//       {...{ onClick }}
//     >
//       <div className="w-[25%] h-[50%] bg-white">
//         <form action="post">
//           <input type="email" name="Email" id="email" />
//         </form>
//       </div>
//     </div>
//   );
// }

function Login() {
  return (
    <div className="fixed inset-0 bg-slate-400 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[25%] h-[50%] bg-white p-10">
        <form action="post">
          <input
            className="border-2 border-cyan-300 focus-visible:border-cyan-300"
            type="email"
            name="Email"
            id="email"
          />
        </form>
      </div>
    </div>
  );
}

export default React.memo(Login);
