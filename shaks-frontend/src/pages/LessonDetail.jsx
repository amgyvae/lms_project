import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCourse, getLesson } from "../api/courses"
import { Link } from "react-router-dom"

export default function LessonDetail() {

  const { id } = useParams()
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null)

  const [nextLesson, setNextLesson] = useState(null)
  const [prevLesson, setPrevLesson] = useState(null)

  const [answers, setAnswers] = useState({})
  const [quiz, setQuiz] = useState(null)

  const [modules, setModules] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    getCourse(3).then(res => {
        const modules = res.data.modules

        setModules(res.data.modules)
        let allLessons =[]

        modules.forEach(module => {
            module.lessons.forEach(lesson => {
                allLessons.push(lesson)
            })
        })

        const index = allLessons.findIndex(l => l.id === Number(id))

        setLesson(allLessons[index])
        console.log(allLessons[index])

        if (allLessons[index].quizzes && allLessons[index].quizzes.length > 0) {
            setQuiz(allLessons[index].quizzes[0])
        }

        if(index > 0) {
            setPrevLesson(allLessons[index - 1])
        } 
        if (index < allLessons.length - 1) {
            setNextLesson(allLessons[index + 1])
        }
        const completedLessons = 1
        const totalLessons = allLessons.length

        setProgress(
            Math.round((completedLessons / totalLessons) * 100)
        )
    })

  }, [id])

  function getYoutubeEmbed(url) {
    const videoId = url.split("v=")[1]
    return `https://www.youtube.com/embed/${videoId}`
  }

  function handleAnswer(questionId, answerId) {
    setAnswers({
        ...answers,
        [questionId]: answerId
    })
  }

  function submitQuiz() {

    console.log("Student answers:", answers)
  
    alert("Quiz submitted!")
  
  }

  if (!lesson) {
    return <h2 style={{display: "flex", textAlign:"center", marginTop:"100px"}}>Loading lesson...</h2>
  }

  return (
    <div style={{maxWidth:"900px", margin:"60px auto", color:"white"}}>

        {/* Sidebar */}
        <div
      style={{
        width: "300px",
        borderRight: "1px solid #222",
        padding: "25px",
        background: "#0b0b0b"
      }}
    >

      <h3 style={{ marginBottom: "20px" }}>Course lessons</h3>

      {modules.map(module => (
        <div key={module.id} style={{ marginBottom: "20px" }}>

          <h4 style={{ color: "#888", marginBottom: "10px" }}>
            {module.title}
          </h4>

          {module.lessons.map(l => {

            const active = Number(lessonId) === l.id

            return (
              <Link
                key={l.id}
                to={`/lessons/${l.id}`}
                style={{
                  display: "block",
                  padding: "10px",
                  marginBottom: "6px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  background: active ? "#2563eb" : "#111",
                  color: "white"
                }}
              >
                {l.title}
              </Link>
            )
          })}

        </div>
      ))}

    </div>
 {/* Sidebar */}

    <div style={{flex: 1,
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"}}
    >
        <h1 style={{marginBottom:"20px"}}>{lesson.title}</h1>

        <div style={{marginBottom:"20px"}}>

            <div style={{
                height:"10px",
                background:"#333",
                borderRadius:"5px"
            }}>

                <div style={{
                width:`${progress}%`,
                background:"#4CAF50",
                height:"100%",
                borderRadius:"5px"
                }} />

            </div>

            <p>{progress}% completed</p>

        </div>

        <p style={{marginBottom:"40px"}}>
            {lesson.content}
        </p>

        {lesson.video_url && (
            <iframe
            width="100%"
            height="300"
            src={getYoutubeEmbed(lesson.video_url)}
            title="Lesson video"
            />
        )}

        {quiz && (
            <div className="quiz">
            <h2>Quiz</h2>
        
            {quiz.questions.map((q) => (
            <div key={q.id} className="question">
                <h3>{q.text}</h3>
        
                {q.answers.map((a) => (
                <label key={a.id}>
                    <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={a.id}
                    onChange={() => handleAnswer(q.id, a.id)}
                    />
                    {a.text}
                </label>
                ))}
            </div>
            ))}
        
            <button onClick={submitQuiz}>Submit Quiz</button>
        </div>
        )}

            <div style={{display:"flex", justifyContent:"space-between", marginTop:"40px"}}>
                {prevLesson && (
                    <Link to={`/lessons/${prevLesson.id}`}>
                        ← Previous lesson
                    </Link>
                )}

                {nextLesson && (
                    <Link to={`/lessons/${nextLesson.id}`}>
                        Next lesson →
                    </Link>
                )}
            </div>
        </div>
    </div>

  )
}