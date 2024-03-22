import { FC, ReactNode } from "react"
import "./index.scss"
import { X } from "lucide-react"
import { AlertTypes } from "../../../types";

interface IProps {
  type: AlertTypes;
  title: string;
  icon: ReactNode;
  description?: string;
  children?:ReactNode;
}
const Alert: FC<IProps> = ({ type, title, icon, description, children}) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          

          <span>{icon}</span>
          <h4>{title}</h4>
        </div>
        <X className="close" size={20} />
      </div>
      
      {children ? children  :<p>{description}</p> }
    </div>
  )
}

export default Alert