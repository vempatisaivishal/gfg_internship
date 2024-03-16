import { useNavigate } from "react-router-dom";
export function StickyNavbar() {
  const nav = useNavigate();
    const clickHandler = () => {
        nav('/')
    }
  return (
    <>
      <div className="sticky top-0 flex justify-between bg-slate-900 text-slate-50 items-center border-b border-slate-700">
        <div className="ml-12 font-semibold text-xl cursor-pointer" onClick={clickHandler}>
          codeOptimizerPro
        </div>
        <div className="flex justify-between">
          <div className="m-4 text-yellow-500 cursor-pointer hover:underline" onClick={clickHandler}>
            Home
          </div>
          <div className="m-4 cursor-pointer hover:underline">
            About Us
          </div>
          <div className="m-4 cursor-pointer hover:underline">
            Contact Us
          </div>
        </div>
        <div className="flex justify-between">
          <button className="w-20 h-10 m-4 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Login</button>
          <button className="w-20 h-10 m-4 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
          ">Sign Up</button>
        </div>
      </div>
    </>
  )
}