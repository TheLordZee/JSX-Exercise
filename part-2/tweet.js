const Tweet = (props) => (
    <div>
        <h2>{props.username}</h2>
        <h3>{props.name}</h3>
        <p><b>{props.date}</b></p>
        <p>{props.message}</p>
    </div>
)