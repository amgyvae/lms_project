import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCourse } from "../api/courses"
import { Link } from "react-router-dom"

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    getCourse(id).then((res) => {
      setCourse(res.data)
    })
  }, [id])

  if (!course) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>
  }

  return (
    <div style={{ maxWidth: "900px", margin: "60px auto", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>{course.title}</h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        {course.description}
      </p>

      <h2 style={{ marginBottom: "20px" }}>Modules</h2>

      {course.modules && course.modules.length > 0 ? (
        course.modules.map((module) => (
          <div
            key={module.id}
            style={{
              border: "1px solid #444",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
              background: "#1f1f1f",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>{module.title}</h3>

            {module.lessons && module.lessons.length > 0 ? (
              <ul style={{ paddingLeft: "20px" }}>
                {module.lessons.map((lesson) => (
                  <li key={lesson.id} style={{ marginBottom: "10px" }}>
                    <Link
                        to={`/lessons/${lesson.id}`}
                        style={{ color: "#9ecbff", textDecoration: "none" }}
                    >
                        {lesson.title}
                    </Link>
                </li>
                ))}
              </ul>
            ) : (
              <p>No lessons yet</p>
            )}
          </div>
        ))
      ) : (
        <p>No modules yet</p>
      )}
    </div>
  )
}