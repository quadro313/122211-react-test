import "./UserComponent.css"

export default function User({name, age, color}) {

    return (
        <div className="border">
            <div className="avatar" style={{"background-color": color}}></div>
            <p>{name}</p>
            <span>{age}</span>
        </div>
    )
}