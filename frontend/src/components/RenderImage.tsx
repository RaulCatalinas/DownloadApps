interface Image {
  src: string
  alt: string
  width: number
  margin: number
}

export default function RenderImage({ src, alt, width, margin }: Image) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: `${width}px`, height: 'auto', margin: `${margin}px` }}
    />
  )
}
