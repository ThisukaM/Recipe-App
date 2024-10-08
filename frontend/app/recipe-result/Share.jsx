import { CardBody } from "@nextui-org/react";
import React, { useEffect } from 'react';


export default function Share({ instructions, ingredients, title }) {
    const instructionList = Array.isArray(instructions) ? instructions : [];
    const ingredientsList = Array.isArray(ingredients) ? ingredients : [];

    useEffect(() => {
        // Load the Twitter widgets script after the component mounts
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);
    }, []);

    let instructionsString ="Ingredients: \n";
    let tweetString = "";

    for(let i = 0; i<ingredientsList.length;i++){
        instructionsString = instructionsString.concat("- " + ingredientsList[i] + "\n")
    }
    instructionsString = instructionsString.concat("\n Cooking Instructions: \n")

    for(let i = 0; i<instructionList.length;i++){
        instructionsString = instructionsString.concat((i+1) + ". " + instructionList[i] + "\n")
    }

    for(let i = 0;i<instructionsString.length;i++){
        let currentChar = instructionsString[i];
        if(currentChar == " "){
            currentChar = "+";
        }
        // if(currentChar == "\n"){
        //     currentChar = "%0A";
        // }
        tweetString = tweetString.concat(currentChar);
    }

    console.log("LOL " + tweetString);

    const emailLink = `mailto:?subject=${encodeURIComponent(title + " Recipe")} &body=${encodeURIComponent(instructionsString)}`;
    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetString)}`;
    return (
        <CardBody className="p-4">
            <div className="flex items-center mb-2 gap-4">
           <button class="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-600 transition-colors"><a href={emailLink} target="_blank">✉️ Email</a></button>
           <a className="twitter-share-button" href={twitterLink} data-size="large">Tweet</a>
           </div>
        </CardBody>
    );
}


const styles = {
    emailButton: {
        backgroundColor: 'blue',
        border: 'none',
        cursor: 'pointer'
    },
};
