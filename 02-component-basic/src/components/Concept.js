function Concept(props) {
    return (
        <li className="concept">
            <img src={props.info.image} alt={props.info.title} />
            <h2>{props.info.title}</h2>
             <p>{props.info.description}</p>
        </li>
    );
}

export default Concept;