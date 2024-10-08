import { CardBody } from "@nextui-org/react";
import React, { useEffect } from 'react';


export default function Share({ instructions, ingredients, title, recipeId }) {
    const instructionList = Array.isArray(instructions) ? instructions : [];
    const ingredientsList = Array.isArray(ingredients) ? ingredients : [];

    // useEffect(() => {
    //     // Load the Twitter widgets script after the component mounts
    //     const script = document.createElement('script');
    //     script.src = 'https://platform.twitter.com/widgets.js';
    //     script.async = true;
    //     script.charset = 'utf-8';
    //     document.body.appendChild(script);
    // }, []);

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
        // if(currentChar == " "){
        //     currentChar = "+";
        // }
        // if(currentChar == "\n"){
        //     currentChar = "%0A";
        // }
        tweetString = tweetString.concat(currentChar);
    }

    console.log("LOL " + tweetString);

    const emailLink = `mailto:?subject=${encodeURIComponent(title + " Recipe")} &body=${encodeURIComponent(instructionsString)}`;
    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(instructionsString)}`;
    const recipeUrl = `mealmatch.com/recipe-result?result-id=${recipeId}`
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${(recipeUrl)}`;
    return (
        <CardBody className="p-4">
        <div className="flex items-center mb-2 gap-4">
            <a 
                className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 transition-colors" 
                href={emailLink} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <span role="img" aria-label="Email">✉️</span> Email
            </a>
            <a 
                className="twitter-share-button flex items-left gap-2 px-6 py-2 rounded-md text-white bg-black hover:bg-black transition-colors" 
                href={twitterLink} 
                data-size="large"
                style={{
                    paddingLeft: '8px',
                    paddingRight: '32px'
                }}
            >
                <img src="/X_logo_2023_(white).png" alt="facebook Icon" className="h-5 w-5" />
                Tweet
            </a>
            <a 
                className="flex items-center gap-2 px-8 py-2 w-full rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors" 
                href={facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    paddingLeft: '8px',
                    paddingRight: '32px'
                }}
            >
                <img src="/Facebook_Logo_2023.png" alt="facebook Icon" className="h-5 w-5" />
                Facebook
            </a>
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
