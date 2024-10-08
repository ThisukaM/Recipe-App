import React from 'react';
import { CardBody } from "@nextui-org/react";

export default function Share({ instructions, ingredients, title }) {
    const instructionList = Array.isArray(instructions) ? instructions : [];
    const ingredientsList = Array.isArray(ingredients) ? ingredients : [];

    let instructionsString ="Ingredients: \n";

    for(let i = 0; i<ingredientsList.length;i++){
        instructionsString = instructionsString.concat("- " + ingredientsList[i] + "\n")
    }
    instructionsString = instructionsString.concat("\n Cooking Instructions: \n")

    for(let i = 0; i<instructionList.length;i++){
        console.log("LOL" + instructionsString);
        instructionsString = instructionsString.concat((i+1) + ". " + instructionList[i] + "\n")
    }

    const emailLink = `mailto:?subject=${encodeURIComponent(title + " Recipe")} &body=${encodeURIComponent(instructionsString)}`;
    return (
           <h4><a href={emailLink} target="_blank">Send an email!</a></h4>
    );
}

// const styles = {
//     cardBody: {
//         padding: '0 16px',
//     },
//     header: {
//         display: 'flex',
//         alignItems: 'center',
//         marginBottom: '10px',
//     },
//     instructionsTitle: {
//         marginRight: '10px',
//         marginBottom: '0',
//     },
//     cookingTime: {
//         fontSize: '0.9em',
//         color: '#888',
//         marginTop: '2px'
//     },
//     instructionsContent: {
//         overflow: 'auto',
//         maxHeight: 'calc(100% - 40px)',
//     },
//     instructionsList: {
//         paddingLeft: '10px',
//     },
//     instructionItem: {
//         marginBottom: '2px',
//     },
//     dash: {
//         fontWeight: 'bold',
//         marginRight: '5px',
//     },
// };
