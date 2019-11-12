import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
    width: '20%',
    height: '25%',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    margin: '0 auto',
    marginBottom: '-4px',
    '&:hover svg': {
        color: '#fff',
        transform: 'scale(1.5)'
    }
    },
    boxContent: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        padding: '10px',
        width: '100%',
        color: 'rgba(0, 0, 0, 0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        transition: 'all 0.2s ease-in-out'
    }
}

const DragableColorBox= SortableElement((props) => {
    const { classes, handleClick, name, color } = props
    return (
        <div className={classes.root} 
            style={{backgroundColor:color}}
        >
        <div className={classes.boxContent}>
           <span>{name}</span>
           <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
        </div>
        </div>
    )
});

export default withStyles(styles)(DragableColorBox);
