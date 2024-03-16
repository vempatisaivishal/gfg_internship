import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export function Results(props){
    const {
        errInfo, 
        setErrInfo,
        critetia, 
        setCriteria,
        additonal, 
        setAdditional
    } = useContext(AppContext);
    
    return(
        <div className="flex flex-col justify-around items-center h-fit bg-slate-900 text-slate-200">
            <div>
                <p className="text-2xl font-semibold text-red-300">Errors</p>
                <div className="px-6 py-6 mt-4 mb-4 block w-[800px] shadow-sm sm:text-sm bg-slate-800 rounded-md">
                    {errInfo.map((error, index) => (
                        <div key={index} className="mb-10">
                        <p>Error Type: {error.errorType}</p>
                        <p>Error Description: {error.errorDescription}</p>
                        <p>Element: {error.element}</p>
                        <p>Line Number: {error.lineNumber}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="text-2xl font-semibold text-amber-200">Criteria</p>
                <div className="px-6 py-6 mt-4 mb-4 block w-[800px] shadow-sm sm:text-sm bg-slate-800 rounded-md">
                {critetia.map((criterion, index) => (
          <div key={index} className="mb-10">
            <p>Criteria Name: {criterion.criteriaName}</p>
            <p>Followed: {criterion.followed}</p>
            <p>Description: {criterion.description}</p>
          </div>
        ))}
                </div>
            </div>
            <div>
                <p className="text-2xl font-semibold text-green-300">Additional Feedback</p>
                <div className="px-6 py-6 mt-4 mb-4 block w-[800px] shadow-sm sm:text-sm bg-slate-800 rounded-md">
                {additonal.map((feedback, index) => (
        <div key={index} className="mb-10">
          <h2>{feedback.feedbackName}</h2>
          <p>{feedback.feedbackDesc}</p>
        </div>
      ))}
                </div>
            </div>
        </div>
    )
}