const App = () => (
    <div>
        <Person name="Steve" age={22} hobbies={["Eating", "Sleeping", "Breaking Things"]}/>
        <Person name="Jack" age={34} hobbies={["Drinking Rum", "Finding Treasure", "Fighting the Undead"]}/>
        <Person name="Bob" age={33} hobbies={["Depression"]}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))