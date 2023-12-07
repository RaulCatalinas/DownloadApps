// CSS
import "@css/share-button.css";

// Icons
import ShareIcon from "@assets/ShareIcon.svg";
import RenderIcon from "./RenderIcon";

export default function ShareButton() {
  const handleClick = () => {
    alert("Sharing...");
  }

  return (
    <button className="share-button" onClick={handleClick}>
      <RenderIcon src={ShareIcon} alt="Icon to share the web" width={37} />
    </button>
  )
}