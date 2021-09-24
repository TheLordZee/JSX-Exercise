const Person = (props) => {
    let message = (props.age > 18) ? "Please go vote!" : "You must be 18.";
    return(
        <div>
            <p>Learn more about {(props.name.length <= 8) ? props.name : props.name.splice(0,5)}</p>
            <p>{message}</p>
            <ul>
                <li>Name: {(props.name.length <= 8) ? props.name : props.name.splice(0,5)}</li>
                <li>Age: {props.age}</li>
                <li>Hobbies:
                    <ul>
                        {props.hobbies.map(h =>(
                            <li>{h}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}