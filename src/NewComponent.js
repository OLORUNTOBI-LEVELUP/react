import React from 'react';

var students = [
    {
        Name: "Oloruntobi",
        Age: 23,
        Hobby: 'Reading',

    },
    {
        Name: "Demilade",
        Age: 13,
        Hobby: 'Sleeping',
    },
    {
        Name: "Johnson",
        Age: 27,
        Hobby: 'Playing games',
    },
    {
        Name: "Dayo",
        Age: 30,
        Hobby: 'Coding, Watching movies',
    },
    {
        Name: "Jennifer",
        Age: 23,
        Hobby: 'Cooking',
    }
]

class NewComponent extends React.Component{
    render(){
         return <div>
                      {
                          students.map(function(person, index){
                              return <h1 key = {index}>Name: {person.Name}. Age: {person.Age}. Hobbies Include: {person.Hobby}</h1>
                          })

                      }
                </div>
    }
}

export default NewComponent;