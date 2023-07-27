import NavigationBar from "@/component/NavigationBar";

interface ListItemProps {
  text: string;
}

const ListItem = (props: ListItemProps) => {
    const text = props.text;
    return <li>
        <a>{text}</a>
        </li>;
  };
   
  const About = () => {
    return (
      <div>
        <NavigationBar />
        <h1>About</h1>
        <p>This is my about page. Here are some details about me:</p>
        <ul>
          <ListItem text="I am learning to code 💻" />
          <ListItem text="I have a pet piranha 🐡" />
          <ListItem text="I like hiking active volcanoes 🥾" />
        </ul>
      </div>
    );
  };
   
  export default About;