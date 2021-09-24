const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Steve"/>
    </div>
)
ReactDOM.render(<App />, document.getElementById("root"))