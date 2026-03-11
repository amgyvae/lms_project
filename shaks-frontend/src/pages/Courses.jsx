import { useEffect, useState } from "react";
import { getCourses } from "../api/courses";
import { Link } from "react-router-dom";

function Courses() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(res => {
            setCourses(res.data)
        })
    }, [])

    return (
        <div style={{padding:40}}>
            <h1>Courses</h1>

            {courses.map(course => (
                <div key={course.id}>
                    <Link to={`/courses/${course.id}`}>
                        <h2>{course.title}</h2>
                    </Link>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Courses