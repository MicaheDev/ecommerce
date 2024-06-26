import Slider from "@/components/Slider/Slider";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div style={{background: "#000"}}>
      <div style={{ display: "grid", placeContent: "center", width: "80%", margin: "auto" }}>
        <Slider />
      </div>
      </div>
    </div>
  );
}
