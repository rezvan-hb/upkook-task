
import React  from "react";
import classes from './Item.module.css';
import { Link } from "react-router-dom";

const ShowDetail = (props) => {

    const {title,creation_date,short_description,description} = props
    console.log('props::::', props)

    return (
        <div className={classes.detail}>
            <div className={classes.detail2}>
                <div>
                    <label>title:</label><p><b> {title}</b></p>
                </div>
                <div>
                    <label>creation date:</label><p><b> {creation_date} </b></p>
                </div>
                <div>
                    <label>short description:</label><p><b> {short_description} </b></p>
                </div>
                <div>
                    <label>description:</label><p><b> {description} </b></p>
                </div>
                <Link to='./'> <button className="btn btn btn-success"> back </button></Link>
            </div>
        </div >
    )
}
export default ShowDetail