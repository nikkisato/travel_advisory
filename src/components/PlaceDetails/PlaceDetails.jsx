import React from 'react'
// import useStyles from './styles.js';


const PlaceDetails = ({place}) => {
    console.log(place)
    // const classes = useStyles();

    return (
        <h1>{place.name}</h1>
    )
}

export default PlaceDetails;