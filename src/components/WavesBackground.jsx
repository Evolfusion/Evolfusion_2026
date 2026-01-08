import Wave from "react-wavify";
/* Componente de fondo con ondas , configuración */
export default function WavesBackground() {
  return (
    <div className="waves-bg">
      <Wave
        fill="url(#aboutGradient)"
        paused={false}
        options={{
          height: 30,
          amplitude: 25,
          speed: 0.12,
          points: 4,
        }}
      >
        <defs>
          <linearGradient id="aboutGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
}
