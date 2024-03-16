import { useNavigate } from "react-router-dom";
export function Description() {
    const nav = useNavigate();
    const clickHandler = () => {
        nav('/evaluation')
    }
    return (
        <div className="bg-slate-900 text-slate-200 text-center h-screen">
            <div className="p-4 flex flex-col justify-center items-center">
                <div class="group mx-auto mt-16 w-fit rounded-full bg-amber-400 p-1 font-bold text-slate-900 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                    <div class="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 cursor-pointer" onClick={clickHandler}>
                        <p>Start optimizing your code</p>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                    </div>
                </div>
                <div className="w-1/2 m-8 flex justify-center items-center text-4xl font-semibold">
                    Welcome to <span>&nbsp;</span><span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">CodeOptimizerPro</span>
                </div>
                <div className="m-2 flex justify-center items-center text-xl font-semibold text-slate-400">
                    Revitalize your applications with our advanced code optimization tools, engineered to enhance speed and efficiency while ensuring reliability. <br />Say goodbye to bloated code and hello to streamlined performance.
                </div>
            </div>
        </div>
    )
}