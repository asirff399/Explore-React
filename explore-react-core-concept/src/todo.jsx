// export default function Todo({task}){
//     return (
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     )
// }

// Conditional rendering option 1

// export default function Todo({task,isDone}){
//     if(isDone){
//         return (
//             <div>
//                 <li>Finised: {task}</li>
//             </div>
//         )
//     }else{
//         return (
//             <div>
//                 <li>Worke on: {task}</li>
//             </div>
//         )
//     }
// }

// Conditional rendering option 2
// export default function Todo({task,isDone}){
//     if(isDone){ return <li>Complete: {task}</li>} 
//     return <li>Worke on: {task}</li>
// }

// Consitional rendering option 3 : Ternary operator
// export default function Todo({task,isDone}){
//     return <li>{isDone ? "Completed":"Worke on"}: {task}</li>
// }

// Consitional rendering option 4
// export default function Todo({task,isDone}){
//     return <li>{task}{isDone && ': Done'}</li>
// }

// Consitional rendering option 5
// export default function Todo({task,isDone}){
//     return <li>{task}{isDone || ': Do it'}</li>
// }

// Consitional rendering option 6
export default function Todo({task,isDone}){
    let listItem;
    if(isDone){return listItem = <li>Finised: {task}</li>}
    else{return listItem = <li>Worke on: {task}</li>}
}

// Consitional rendering option 7
// export default function Todo({task,isDone}){
//     return <li>{task}{isDone || ': Do it'}{isDone && ': Done'}</li>
// }