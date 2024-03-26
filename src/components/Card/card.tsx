import "./card.scss"

import { ArrowRight } from "lucide-react"

interface Props {
  title: string,
  desc: string,
  href: string,
  img?: string,
  alt?: string
  imageId?: string,
  anchorClass?: string
}

export default function Card(props: Props): JSX.Element {
  return (
    <div className="card">
      <img src={props.img} alt={props.alt} id={props.imageId} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <a href={props.href} className={`custom-a ${props.anchorClass}`}>
          <span>Saiba mais</span>
          <ArrowRight className="arrow-left" id="left1" />
        </a>
      </div>
    </div>
  )
}