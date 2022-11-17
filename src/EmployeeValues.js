let myemployeedetails=[
    {
        "empId":1,
        "empName":"Manojkumar",
        "empUsername":"Maddy433",
        "empPassword":"******",
        "empDesignation":"Java Developer",
        "empExp":2,
        "empSalary":240000
    },
    {
        "empId":2,
        "empName":"Razzak",
        "empUsername":"Razak33",
        "empPassword":"*****as*",
        "empDesignation":"Languages Developer",
        "empExp":10,
        "empSalary":2400000
    },
    {
        "empId":3,
        "empName":"Aarthi",
        "empUsername":"Aa32",
        "empPassword":"****wd**",
        "empDesignation":"Python Developer",
        "empExp":1,
        "empSalary":190000
    },
    {
        "empId":4,
        "empName":"Annamalai",
        "empUsername":"Malai433",
        "empPassword":"****34",
        "empDesignation":"Java,Python,Testing Developer",
        "empExp":3,
        "empSalary":450000
    },
]

export const create=(obj)=>
{
     myemployeedetails.push(obj)
}

export const list=()=>
{
    return myemployeedetails
}