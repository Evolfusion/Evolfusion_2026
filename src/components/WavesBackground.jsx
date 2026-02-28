import Wave from "react-wavify";

export default function WavesBackground() {
  return (
    <div className="waves-bg">
      <Wave
        fill="url(#aboutGradient)"
        paused={false}
        options={{
          height: 100,
          amplitude: 250,
          speed: 0.08,
          points: 3,
        }}
        className="wave"
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
