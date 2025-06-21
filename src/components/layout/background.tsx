import { useMouseTracking } from "../../hooks/useMouseTracking"

export function Background() {
  const mousePosition = useMouseTracking()

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div
        className="cyber-grid opacity-10"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      ></div>
    </div>
  )
}
