import React, { useState } from 'react'
import styled from 'styled-components';
import { palette, CSS_HELPERS } from '../../theme';
import { colors } from '@material-ui/core';

const ColorPicker = ({onChange}) => {

    const [colorList, setColorList] = useState(
        [
            {
                color: '#dc3545'

            },
            {
                color: '#ffc107'
            },
            {
                color: '#28a745'
            },
            {
                color: '#007bff',
            },
            {
                color: '#17a2b8'
            }
        ]

    );

    function updateObjectInArray(array, index) {
        const newArray = array.map(item=>(
            {
                color:item.color
            }
        ));
        const selected = {
            ...newArray[index],
            selected:true
        }
        const found = newArray.findIndex(item => item.color ==selected.color);
        newArray[found]=selected;
        return newArray;
    }


    const hanldeColorChange = (index) => {    
       const newColors = updateObjectInArray(colorList, index);
       setColorList([ ...newColors])

       onChange(colorList[index].color);

    }



    return (
        <List>
            {
                colorList.map((item, index) => (
                    <ListItem
                        key={item.color}
                        onClick={() => hanldeColorChange(index)}
                        color={item.color}
                        selected={item.selected}
                    />
                ))
            }

        </List>
    )
}

export default ColorPicker
const List = styled.div`
    padding:3em 0 3em 0;
    width:100%;
    display:flex;
    flex-direction:'row';
    display:flex;
    align-items: center;
    flex-direction:row;

`;
const ListItem = styled.div`
    background-color:${props => props.color};
    width:${props => props.selected ? '1.8em' :'1.2em'};
    height:${props => props.selected ? '1.8em' :'1.2em'};
    border-radius:25px;
    -webkit-box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
    -moz-box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
    box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
    margin:0 .6em 0 .6em;
    transition: all .3s ease-in-out;

    
    &:hover{
        transform: scale(1.5);
    }
    cursor:pointer;

  
`