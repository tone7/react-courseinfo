import React from 'react'

const Course = (props) => {
    return (
    <div>
        <Header course={props.course}/>
        <Content course={props.course}/>
        <Total course={props.course}/>
    </div>
    )
}

const Header = (props) => {
    return (
    <div>
        <h1>{props.course.name}</h1>
    </div>
    )
}

const Content = (props) => {
    return (
    <div>
        {props.course.parts.map(part => 
            <Part 
                part={part.name} exercise={part.exercises} key={part.id}
            />
        )}
    </div>
    )
}

const Part = (props) => {
    return (
    <div>
        <p>
            {props.part} {props.exercise}
        </p>
    </div>
    )
}

const Total = (props) => {
    return (
    <div>
        <p style={{fontWeight:"bold"}}>
        total of {props.course.parts.reduce(
            (previousValue, currentValue) => previousValue + currentValue.exercises, 0)
        } exercises
        </p>
    </div>
    )
}

export default Course
