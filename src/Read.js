import { useEffect, useState } from "react";
import { read } from "./EmployeeValues";

export const Read=(aarthi)=>
{
    const[employee,setEmployee]=useState({
        "empId":0,
        "empName":"",
        "empUsername":"",
        "empPassword":"",
        "empDesignation":"",
        "empExp":0,
        "empSalary":0
    })

    useEffect(()=>
    {
        CallReading()
    })
    

    const CallReading=()=>{
        setEmployee(read(aarthi.who))
    }
    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="bg-dark text-light card col-lg-8 col-md-10 col-sm-12">
                    <h1 className="card-title text-center">{employee.empId}</h1>
                    <div className="card-body">
                        <p className="text-center"><span className="float-start">EmployeeName</span>{employee.empName}</p>
                        <p className="text-center"><span className="float-start">EmployeeUsername</span>{employee.empUsername}</p>
                        <p className="text-center"><span className="float-start">EmployeePassword</span>{employee.empPassword}</p>
                        <p className="text-center"><span className="float-start">EmployeeDesignation</span>{employee.empDesignation}</p>
                        <p className="text-center"><span className="float-start">EmployeeExp</span>{employee.empExp}</p>
                        <p className="text-center"><span className="float-start">EmployeeSalary</span>{employee.empSalary}</p>
                    </div>

                </div>

            </div>

        </div>

        </>
    );
    
}