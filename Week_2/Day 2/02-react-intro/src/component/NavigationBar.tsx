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
    </li>
  );
};

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <NavItem text="return home" href="/" />
        <NavItem text="home" href="/" />
        <NavItem text="about" href="/about" />
        <NavItem text="Contact" href="/contact" />
        <NavItem text="Cows" href="/cows" />
        <NavItem text="Sheep" href="/sheep" />
        <NavItem text="Pig" href="/pig" />
        <NavItem text="Chicken" href="/chicken" />
        <NavItem text="Skills" href="/skills" />
      </ul>
    </nav>
  );
};

export default NavigationBar;
