import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleTeamAdd = () => {
        const newTeamMember = team+1;
        setTeam(newTeamMember);
    }

    const handleTeamRemove = () => {
        setTeam(team-1);
    }

    const TeamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadious: '10px',
    }
    return (
        <div style={TeamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleTeamAdd}>Add</button>
            <button onClick={handleTeamRemove}>Remove</button>
        </div>
    )
}