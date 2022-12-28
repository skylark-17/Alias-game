import './Button.css'

function Button(props){
    const {title, func} = props
    return(
        <button className='btn' onClick={()=> func()}>{title}</button>
    )
}

export default Button