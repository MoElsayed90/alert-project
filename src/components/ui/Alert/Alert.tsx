import { FC, ReactNode } from "react"
import "./index.scss"
import { X } from "lucide-react"

interface IProps {
type : string;
title: string;
icon:ReactNode;
description:string;
}
const Alert: FC<IProps> = ({type,title,icon,description}) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">

        <span>{icon}</span>
          <h4>{title}</h4>
        </div>
        <X  className="close" size={20}/>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Alert