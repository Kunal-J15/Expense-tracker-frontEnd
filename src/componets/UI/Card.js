import "./Card";
export default function Card(props) {
    const classes = "Card "+props.className;
    return (
        <div className={classes} id={props.id}>
            {props.children}
        </div>
    )
}