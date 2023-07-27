// const NavItemHome = () => {
//     return (
//         <li>
//             <a href="/">Home</a>
//         </li>
//     );
// };

// const NavItemAbout = () => {
//     return (
//     <li>
//         <a href="/about">About</a>
//     </li>
//     );
// };

// const NavItemContact = () => {
//     return (
//         <li>
//             <a href="/contact">Contact</a>
//         </li>
//     );
// };

interface NewNavItemProps {
    href: string;
    text: string;
}

const NewNavItem = (props: NewNavItemProps) => {
    const href = props.href;
    const text = props.text;
    return (
        <li>
        <a href={href}>{text}</a>
        </li>
    );
};

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <NewNavItem text="Home" href="/" />
                <NewNavItem text="About" href="/about" />
                <NewNavItem text="Contact" href="/contact" />
            </ul>
        </nav>
    );
};

const Home = () => {
    return (
      <div>
            <NavigationBar />
        <div>
          <h1>Hello World!</h1>
        </div>
      </div>
    );
  };
   
  export default Home;