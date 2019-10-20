
import React , {useState} from "react";
import WithClass from './hoc/WithClass';
import classes from './Item.module.css';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import {get_Detail_Info} from './Redux/action'

const Item = (props) => {
    const {id,title,creation_date,short_description,description} = props
    const {handelDeleted,handelUpdateTitle,handelUpdateShortDescriptionChange} = props

    const [showModal,setshowModal] = useState(false)
    const [isToggleon,setIsToggleon] = useState(true)
    
    const handelToggleClick = () => {
        setIsToggleon(!isToggleon)
    }

    const handleOpenModal = () => {
        setshowModal(true)
    }
      
    const handleCloseModal = () => {
        setshowModal(false)
    }

    const handleShowDetail = () => {
        props.dispatch(get_Detail_Info(id,title,creation_date,short_description,description)) 
    }
    
    return (
        <React.Fragment >
            <p>title:   <span><b>{title}</b></span></p>
            <p>creation date:   <span><b>{creation_date}</b></span></p>
            <p>short description:   <span><b>{short_description}</b></span></p>
            
            <div className={classes.buttonStyle}>
                <button className="btn btn btn-light" onClick={handelToggleClick}>{isToggleon ?'On':'Off'}</button>
                {isToggleon?
                <div>
                    <button className="btn btn btn-danger" onClick={handelDeleted}>Delete</button>
                    <Link to='./ShowDetail'><button className="btn btn btn-success" onClick={handleShowDetail}> ShowDetail </button></Link>

                    <button className="btn btn btn-info" onClick={handleOpenModal}>Edit</button>
                        <Modal 
                            isOpen={showModal}
                            contentLabel="onRequestClose Example"
                            onRequestClose={handleCloseModal}
                            className="Modal"
                        >
                            <div className={classes.modalBody}>
                                <div className={classes.modalOption}>
                                    <label>title:</label>
                                    <input type='text' value = {title} onChange={handelUpdateTitle}></input>
                                    <label>short description:</label>
                                    <input type='text' value = {short_description} onChange={handelUpdateShortDescriptionChange}></input>
                                    <button onClick={handleCloseModal}>Ok</button>

                                </div>
                            </div>
                        </Modal>
                    </div> 
                    : <div>
                        <button className="btn btn btn-danger" disabled >Delete</button>
                        <Link to='./ShowDetail'> <button className="btn btn btn-success" disabled> ShowDetail </button></Link>
                        <button className="btn btn btn-info" disabled >Edit</button>
                    </div>
                    }  
            </div>
        </React.Fragment >
    )
}
export default React.memo( WithClass(Item,classes.listItem))