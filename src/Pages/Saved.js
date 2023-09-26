import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BinImg from "../Images/bin.png";
import { postData } from "../Data/data";
import { unSavePost } from "../StateManagement/postSlice";
import noData from "../Images/noData.png";
import "../Styles/Saved.css"; // Import your CSS file for styling

function Saved() {
  var postIds = useSelector((state) => state.post); // Assuming the state key is 'post'
  const dispatch = useDispatch();

  const handleUnsavePost = (id) => {
    dispatch(unSavePost({ id }));
  };

  return (
    <div>
      {postIds.length === 0 ? (
        <div className="centered">
          <img className="no-data-image" src={noData} alt="No Data" />
          <p className="no-data-text">No saved posts found.</p>
        </div>
      ) : (
        postIds.map((postId, index) => {
          const post = postData[postId];
          if (!post) {
            return null;
          }
          return (
            <div key={index} className="post">
              <img
                className="photo"
                src={post["image_url"]}
                alt={`Image for ${post["character_name"]}`}
              />
              <div>{post["played_by"]}</div>
              <div>{post["character_name"]}</div>
              <div>{post["movie"]}</div>
              <img
                onClick={() => handleUnsavePost(postId)}
                className="icon"
                src={BinImg}
                alt="Delete"
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Saved;
