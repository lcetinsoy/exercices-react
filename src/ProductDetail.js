
/**
 * Displays a single Product information 
 * 
 * @param {Object} props 
 */
export default function ProductDetail(props){
   
    return (<div>

        <ul>
            <li>{props.name}</li>
            <li>{props.description}</li>
            <li>{props.price}</li>
        </ul>
    </div>)
}
