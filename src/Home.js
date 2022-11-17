import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { list } from "./EmployeeValues"
import { Register } from "./NewEmployee"
import { Read } from "./Read"

export const Home=()=>
{
    const[tmparray,setTmparray]=useState([])
    const[createView,setCreateView]=useState(false)
    const[readView,setReadView]=useState(false)
    const[pos,setPos]=useState(0)

    const result=()=>
    {
        setTmparray(list)
    }
    useEffect(()=>
    {
        result()
    })

    return(
        <>
        <div className="container mt-5">
            {(createView)?
            <>
            <Register/>
            <button className="btn btn-outline-secondary " onClick={
                ()=>
                {
                    setCreateView(false)
                }
            }>
                Back
            </button>
            </>
            :
            (readView)?
            <>
            <Read who={pos}/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setReadView(false)
                }
            }>
                <i className="bi bi-skip-backward-btn-fill"></i>
                Back
            </button>
            </>
            :
            <>
            <button className="btn btn-outline-success mb-3" onClick={
                ()=>
                {
                    setCreateView(true)
                }
            }>
                Register a new Student
            </button>
            <div className="row justify-content-center">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
                                <thead>
                                    <tr>
                                        <th>Employee Id</th>
                                        <th>Employee Name</th>
                                        <th>Employee Username</th>
                                        <th>Employee Password</th>
                                        <th>Employee Designation</th>
                                        <th>Employee Experience</th>
                                        <th>Employee Salary</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tmparray.map((ele,ind)=>
                                        (
                                            <tr>
                                            <td>
                                                {ele.empId}
                                            </td>
                                            <td>{ele.empName}</td>
                                            <td>{ele.empUsername}</td>
                                            <td>{ele.empPassword}</td>
                                            <td>{ele.empDesignation}</td>
                                            <td>{ele.empExp}</td>
                                            <td>{ele.empSalary}</td>     
                                            <td>
                                            <button className="btn btn-outline-info" onClick={()=>
                                                {
                                                    setReadView(true)
                                                    setPos(ind)
                                                }}>
                                                    <i className="bi bi-book-half">READ</i>
                                            </button>
                                            </td>
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>



            </>
            }
       
              </div>

        </>
    );

}