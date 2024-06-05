import React from "react";

function createEmoji(minutes) {
    const time = minutes < 30 ? 5 : 10 ; 
    const emoji = minutes < 30 ? "☕️" : "🍱";

    let emojiPicture = "";
    for (let i = 0; i < minutes; i += time){
        emojiPicture += emoji;
    }
    return(
        emojiPicture
    )
}

export default createEmoji;