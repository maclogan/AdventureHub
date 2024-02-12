interface ButtonProps {
    text: string,
    action: ()=>any
    variant: "default" | "primary"

}

export const Button = ({text, action, variant}: ButtonProps) => {
    return(
        <button onClick={action}>{text}</button>
    )
}

export const LikeButton = () => {
    return (
        <button></button>
    )
}