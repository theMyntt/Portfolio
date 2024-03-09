import "./header.scss"

interface Props {
  menuItems: string[],
  hrefItems: string[]
}

export default function Header(props: Props): JSX.Element {
  return (
    <div className="app-container">
      <div className="header-container">
        <div className="header-menu">
          <ul>
            {props.menuItems.map((item: string, index: number) => (
              <li key={index}>
                <a href={props.hrefItems[index]}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}