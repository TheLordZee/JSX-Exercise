const App = () => (
    <ul>
        <li><Tweet username="GreatSteve" name="Steve Boobanis" date="12/03/2020" message = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, mollitia eum libero sequi saepe nam odio fugit facilis praesentium quod repellat amet? Doloribus est ex temporibus tempore nulla, aliquid quam?" /></li>
        <li><Tweet username="ShevisTheSmelly" name="Jack" date="03/12/2021" message = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, mollitia eum libero sequi saepe nam odio fugit facilis praesentium quod repellat amet? Doloribus est ex temporibus tempore nulla, aliquid quam?" /></li>
        <li><Tweet username="QuevitTheGreat" name="Bob" date="07/24/2021" message ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, mollitia eum libero sequi saepe nam odio fugit facilis praesentium quod repellat amet? Doloribus est ex temporibus tempore nulla, aliquid quam?" /></li>
    </ul>
)
ReactDOM.render(<App />, document.getElementById("root"))