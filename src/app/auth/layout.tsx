export default function layout({ children }: any): React.ReactNode {
  return (
    <main
      style={{
        background: "#f2f2f2",
        width: "100%",
        height: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div
        style={{ background: "#fff", width: "min-content", padding: "20px" }}
      >
        {children}
      </div>
    </main>
  );
}
