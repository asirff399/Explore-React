export default function Singers({singer}){
    return (
        <div>
            <li>Name: {singer.name}</li>
            <li>Age: {singer.age}</li>
        </div>
    )
}