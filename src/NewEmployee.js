import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { create } from "./EmployeeValues"

export const Register=()=>
{
    const[person,setPerson]=useState({
        "empId":0,
        "empName":"",
        "empUsername":"",
        "empPassword":"",
        "empDesignation":"",
        "empExp":0,
        "empSalary":0
    })

    const track=(manoj)=>{
        const{name,value}=manoj.target
        setPerson(
            (old)=>{
                return{
                    ...old,
                    [name]:value
                }
        }
        )
    }
    const Regis=()=>{
        alert("Welcome to zealous tech corp,go to back")
        create(person)
        // alert("Registered"+JSON.stringify(person))
    }
    const cancel=()=>
    {
        alert("Rejected your Details")
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <h1 className="text-center text-info display-5 text-uppercase font-monospace">New Employee Details</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shodow-lg p-3">
                    <div className="form group">
                        <label>EmployeeId</label>   
                        <input type="text"
                        name="empId"
                        onChange={track}
                        value={person.empId}
                        placeholder="Employee Id"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeeName</label>   
                        <input type="text"
                        name="empName"
                        onChange={track}
                        value={person.empName}
                        placeholder="EmployeeName"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeeUsername</label>   
                        <input type="text"
                        name="empUsername"
                        onChange={track}
                        value={person.empUsername}
                        placeholder="Employee Username"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeePassword</label>   
                        <input type="text"
                        name="empPassword"
                        onChange={track}
                        value={person.empPassword}
                        placeholder="EmployeePassword"
                        className="form-control"
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                                <label>Employeee Designation</label>
                                <select name="empDesignation"
                                onChange={track}
                                value={person.empDesignation}
                                 className="form-select me-5">
                                    <option>Select Designation</option>
                                    <option>Java Full Stack Developer</option>
                                    <option>Python Full Stack Developer</option>
                                    <option>C &C# Developer</option>
                                    <option>AndroidDeveloper</option>
                                    <option>Other</option>
                                </select>
                            </div>
                    <div className="form group">
                        <label>EmployeeExp</label>   
                        <input type="text"
                        name="empExp"
                        onChange={track}
                        value={person.empExp}
                        placeholder="EmployeeExp"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeeSalary</label>   
                        <input type="text"
                        name="empSalary"
                        onChange={track}
                        value={person.empSalary}
                        placeholder="EmployeeSalary"
                        className="form-control"
                        />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={Regis}>Register</button>
                        <button className="btn btn-outline-success col-3 me-3" type="reset " value="Reset" onClick={cancel}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}