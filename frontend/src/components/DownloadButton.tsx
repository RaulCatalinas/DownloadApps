// Icons
import DownloadIcon from "@assets/DownloadIcon.svg";

// Utils
import { downloadApps } from "@utils/download-apps";

// Components
import RenderIcon from "./RenderIcon";

// CSS
import "@css/download-button.css";

interface DownloadButtonProps {
  downloadURL: string
}

export default function DownloadButton({ downloadURL }: DownloadButtonProps) {
  const handleClick = () => {
    downloadApps(downloadURL)
  }

  return (
    <button
      className="download-button"
      id="download-button"
      onClick={handleClick}
    >
      <RenderIcon
        src={DownloadIcon}
        alt="Icon in svg format to download the executable of the app"
        width={50}
        margin={8}
      />
    </button>
  )
}