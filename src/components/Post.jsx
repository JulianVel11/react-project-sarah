import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function Post({ mode }) {
  const postContent = [
    {
      postId: 1,
      postTittle: "The importance of...",
      postAuthor: 'Sarah Covacs',
      postDate: "15/7/2023",
      postText:
        "Lorem ipsum, dolor sit amet consectetur alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis qui totam eaque aperiam quis!",
    },
    {
      postId: 2,
      postTittle: "Feeling like not enough?",
      postAuthor: 'Sarah Covacs',
      postDate: "1/9/2023",
      postText:
        "Lorem ipsum, dolor sit amet consectetur alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis qui totam eaque aperiam quis!",
    },
    {
      postId: 3,
      postTittle: "Is it really that easy to...?",
      postAuthor: 'Jacob Sanz',
      postDate: "10/9/2023",
      postText:
        "Lorem ipsum, dolor sit amet consectetur alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis qui totam eaque aperiam quis!",
    },
    {
      postId: 4,
      postTittle: "The constant seek for...",
      postAuthor: 'Alice Durand',
      postDate: "13/2/2024",
      postText:
        "Lorem ipsum, dolor sit amet consectetur alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis qui totam eaque aperiam quis!",
    },
    {
      postId: 5,
      postTittle: "All you left behind is now...",
      postAuthor: 'Michelangelo Buonarrot',
      postDate: "18/7/2024",
      postText:
        "Lorem ipsum, dolor sit amet consectetur alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis qui totam eaque aperiam quis!",
    },
    {
      postId: 6,
      postTittle: "Why is breathing so hard?",
      postAuthor: 'Sarah Covacs',
      postDate: "5/17/2024",
      postText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum alias hic? Id quas vero quis repellendus praesentium! Mollitia quae magni debitis accusamus aliquid fugit qui totam eaque aperiam quis!",
    },
  ];

  const [activePostId, setActivePostId] = useState(null);

  const handleClick = (postId) => {
    setActivePostId(activePostId === postId ? null : postId);
  };

  return postContent.map((post) => (
    <div className={`post ${mode ? "darkmode" : ""}`} key={post.postId}>
      <div className="post-tittle">
        <h3>{post.postTittle}</h3>
      </div>
      <div className={`post-content ${activePostId === post.postId ? "extended" : ""}`}>
        <p className="post-text">{post.postText}</p>
        <p className="post-text-details">{post.postAuthor}</p>
        <p className="post-text-details">{post.postDate}</p>
      </div>
      <div className="post-details">
        <span>{activePostId === post.postId ? "Show less" : "Show more"}</span>
        <div onClick={() => handleClick(post.postId)} className={`arrow-container ${activePostId === post.postId ? "activeArrow" : ""}`}>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  ));
}
