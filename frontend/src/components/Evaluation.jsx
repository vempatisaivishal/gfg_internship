import { useNavigate } from "react-router-dom";
import axios from'axios'
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export function Evaluation(){
    const {
        errInfo, 
        setErrInfo,
        critetia, 
        setCriteria,
        additonal, 
        setAdditional
    } = useContext(AppContext);
    const [loading, setLoadingState]  = useState(false);
    const nav = useNavigate();
    async function callGemini(event){
        event.preventDefault();

        const assignment = document.getElementById('assignment').value;
        const requirement = document.getElementById('requirement').value;
        const codeSubmission = document.getElementById('codeSubmission').value;

        const requestBody = {
            assignment: assignment,
            requirements: requirement,
            codeSubmitted: codeSubmission
        }; 

        const resp = await axios.post('http://127.0.0.1:5000/api/evaluate/', requestBody)
            .then(response => {
                const output = response.data;
                const additional = output["additional"].replace("```", "").replace("json", "").replace("JSON:", "").replace("json:", "").replace("[json]", "").replace("[/json]","").replace("```", "").replace("`", "");
                const errors = output["errors"].replace("```", "").replace("json", "").replace("JSON:", "").replace("json:", "").replace("[json]", "").replace("[/json]","").replace("```", "").replace("`", "");
                const corrections = output["corrections"].replace("```", "").replace("json", "").replace("JSON:", "").replace("json:", "").replace("[json]", "").replace("[/json]","").replace("```", "").replace("`", "");
                
                setErrInfo(JSON.parse(errors));
                setCriteria(JSON.parse(corrections));
                setAdditional(JSON.parse(additional));

            });
        nav('/results')
       
    }
    return(
        <form className="flex flex-col justify-between items-center bg-slate-900 text-slate-200 h-fit">
            <div className="m-10">
                <p className="mb-2 font-medium text-md text-amber-50">Assignment</p>
                <textarea
                id="assignment"
                name="assignment"
                rows="4"
                className="mt-1 block h-[100px] w-[800px] shadow-sm sm:text-sm bg-slate-800 rounded-md"
                placeholder="Enter your assignment here..."
            ></textarea>
            </div>

            <div className="m-10">
                <p className="mb-2 font-medium text-xl text-amber-50">Requirement</p>
                <textarea
                id="requirement"
                name="requirement"
                rows="4"
                className="mt-1 block h-[300px] w-[800px] shadow-sm sm:text-sm bg-slate-800 rounded-md"
                placeholder="Enter your requirements here..."
            ></textarea>
            </div>

            <div className="m-10">
                <p className="mb-2 font-medium text-xl text-amber-50">Code Submission</p>
                <textarea
                id="codeSubmission"
                name="codeSubmission"
                rows="100"
                className="mt-1 block h-[300px] w-[800px] shadow-sm sm:text-sm bg-slate-800 rounded-md"
                placeholder="Enter your code here..."
            ></textarea>
            </div>
            <div class="group mx-auto mt-2 w-fit rounded-full bg-amber-400 p-1 font-bold text-slate-900 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                    <div class="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 cursor-pointer" onClick={callGemini}>
                        <p className="text-xl">evaluate</p>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                    </div>
                </div>
        </form>
    )
}