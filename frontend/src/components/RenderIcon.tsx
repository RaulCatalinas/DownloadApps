import "@css/render-icon.css"

interface Icon {
  src: string
  alt: string
  width: number
  margin?: number
}

export default function RenderIcon({ src, alt, width, margin }: Icon) {
  return (
    <img
      src={src}
      alt={alt}
      className="icon"
      style={{ width: `${width}px`, height: "auto", margin: `${margin}px` }}
    />
  )
}