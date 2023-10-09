import React from "react";



const MakeCommentBox = ({setShowCommentBox}) => {

    const [comment, setComment] = React.useState<string>('');
    const SubmitCommentHandler = async () =>  {
        setShowCommentBox(false)

    };

    return (
     <div>
         <textarea maxLength={100} placeholder="Write a comment..."></textarea>
         <button onClick={SubmitCommentHandler}>Submit</button>
     </div>
    );
};

export default MakeCommentBox;