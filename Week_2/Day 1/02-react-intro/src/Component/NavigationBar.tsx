interface NavItemProps {
  text: string;
  href: string;
}

const NavItem = (props: NavItemProps) => {
    const text = props.text;
    const href = props.href;
    return (
        <li>
            <a href={href}>{text}</a>
        </li>;
    )
};

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <NavItem text="home" href="/" />
                <NavItem text="about" href="/about" />
                <NavItem text="Contact" href="/contact" />
            </ul>
        </nav>
    );
};

export default NavigationBar;