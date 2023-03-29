import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: 18,
          color: "#F1F1F1",
          fontWeight: 600,
          marginTop: 30,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}

export default CanvasLoader;
