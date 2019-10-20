
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import WithClass from './hoc/WithClass';
import classes from './Item.module.css';
import ItemContainer from './Redux/containerItem';

import {
	Card,
	CardBody,
	CardTitle,
} from 'reactstrap';

function ShowList () {

    const [loading,setLoading] = useState(true);
    const [listState,setList] = useState([]);

    // const cardElement = useRef()

    useEffect(() => {
        setLoading(true)
        axios.get('http://www.mocky.io/v2/5da5c67d340000d81c632c98')
        .then( response => {
            console.log('response',response);
            setList(response.data)
            setLoading(false)
            // cardElement.current.focuse();
            // console.log('cardElement.current',cardElement.current)
        })
        .catch( error => {
            console.log(error);
        })
    },[])

    const handelDeleted = (index) => {
        const newList=[...listState]
        newList.splice(index,1);
        setList(newList)
    }
    
    const handelUpdateTitle = (event , id) => {
        console.log(event)
        const listIndex = listState.findIndex(listItem => {
            return listItem.id === id }
        )
        const itemDetail = {...listState[listIndex]}
        itemDetail.title = event.target.value
        const updateList = {...listState}
        updateList[listIndex] = itemDetail
        setList(updateList)
    }

    const handelUpdateShortDescriptionChange= (event , id) => {
        const listIndex = listState.findIndex(listItem => {
            return listItem.id === id }
        )
        const itemDetail = {...listState[listIndex]}
        itemDetail.short_description = event.target.value
        const lists = {...listState}
        lists[listIndex] = itemDetail
        setList(lists)
    }

    // const executeScroll=() => {
    //     // window.scrollBy(0, cardElement.current.offsetTop);
    // }

    return (
        <Card>
            <CardBody >
                {loading ? <h1> loading ...</h1> 
                    :<React.Fragment>
                        <CardTitle><h1>survey list page</h1></CardTitle>
                        {listState.map(( item , index ) => 
                            <ItemContainer
                                key = {index}
                                id = {item['id']}
                                title = {item['title']}
                                short_description = {item['short_ description']}
                                creation_date = {item['creation_date']}
                                description ={item['description']}
                                handelDeleted = {handelDeleted}
                                handelUpdateTitle={(event) => handelUpdateTitle(event,item['id'])}
                                handelUpdateShortDescriptionChange={(event) => handelUpdateShortDescriptionChange(event,item['id'])}
                            />
                        )}
                        {/* <button className="btn btn btn-success" onClick={executeScroll}>
                            Click to scroll.
                        </button> */}
                    </React.Fragment>
                }
            </CardBody>
        </Card>
    );
}

export default WithClass( ShowList, classes.list) 
