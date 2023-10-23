import React from 'react'
import './courses.css'
import ai from  '../../../assets/img/ai.png'
import sd from  '../../../assets/img/sd.png'
import dg from  '../../../assets/img/dg.png'
import hacker from  '../../../assets/img/hacking.png'


const Courses = () => {

    const CourseData=[
        {
            title:"AI DEVELOPMENT",
            disc:"Master Ai Development!!!",
            img:ai
        },
        {
            title:"DIGITAL MARKETING",
            disc:"Master Digital Marketing!!!",
            img:dg
        },
        {
            title:"CYBER SECURITY",
            disc:"Master Cyber Security!!!",
            img:hacker
        },
        {
            title:"SOFTWARE DEVELOPMENT",
            disc:"Master Software Development!!!",
            img:sd
        },
        
]

  return (
    <div>
        <div className="container course-container">

        <div className="course-top">
            <h2 className="section_title">
                Our Free Courses
            </h2>
            <p>The Top Free Courses With Free Certificates</p>
            <div className="course-wrapper">

            {
                CourseData.map((course,index)=>(
                    <div className="course-item" key={index}>
                    <span className="course-icon">
                        <img src={course.img} alt="" />
                    </span>
                    <div className="course-content">
                        <h4>{course.title}</h4>
                        <p>{course.disc}</p>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>




        </div>

    </div>
  )
}

export default Courses

