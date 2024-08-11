import { FunctionComponent, HTMLAttributes } from "react";



interface HeadingProps extends  Omit<HTMLAttributes<HTMLHeadingElement>, 'className' | 'style' >{

}


const Heading: FunctionComponent<HeadingProps> = (props) => {




    return(
        <h1>
            {props.title}
        </h1>
    )
}


export default Heading