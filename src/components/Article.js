import React from "react";
import createEmoji from "./Emoji";

function Article ({title, date = "January 1, 1970", preview, minutes}) {
    const emojiPicture = createEmoji(minutes);
    return (
        <article>
            <h3>{title}</h3>
            <small> {date} . {emojiPicture} {minutes} min read </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;