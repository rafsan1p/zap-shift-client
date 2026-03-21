import { useState, useEffect } from "react";

const loadingMessages = [
  "Crafting your experience",
  "Brewing something beautiful",
  "Almost there",
  "Setting the stage",
];

export default function loading() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMsgIndex((i) => (i + 1) % loadingMessages.length);
        setFade(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      {/* Ambient background orbs */}
      <div style={{ ...styles.orb, ...styles.orb1 }} />
      <div style={{ ...styles.orb, ...styles.orb2 }} />
      <div style={{ ...styles.orb, ...styles.orb3 }} />

      {/* Grain overlay */}
      <div style={styles.grain} />

      {/* Center content */}
      <div style={styles.center}>
        {/* Spinner ring stack */}
        <div style={styles.spinnerWrapper}>
          <div style={{ ...styles.ring, ...styles.ring1 }} />
          <div style={{ ...styles.ring, ...styles.ring2 }} />
          <div style={{ ...styles.ring, ...styles.ring3 }} />
          <div style={styles.innerDot} />
        </div>

        {/* Brand mark */}
        <p style={styles.brand}>STUDIO</p>

        {/* Animated message */}
        <p
          style={{
            ...styles.message,
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(6px)",
          }}
        >
          {loadingMessages[msgIndex]}
          <span style={styles.dots}>
            <span style={{ ...styles.dot, animationDelay: "0s" }}>.</span>
            <span style={{ ...styles.dot, animationDelay: "0.3s" }}>.</span>
            <span style={{ ...styles.dot, animationDelay: "0.6s" }}>.</span>
          </span>
        </p>

        {/* Progress bar */}
        <div style={styles.progressTrack}>
          <div style={styles.progressBar} />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Sora:wght@300;400;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes spin1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin2 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes spin3 {
          from { transform: rotate(45deg); }
          to   { transform: rotate(405deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50%       { transform: scale(1.18); opacity: 1; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%       { transform: translateY(-30px) translateX(20px); }
          66%       { transform: translateY(20px) translateX(-15px); }
        }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40%            { opacity: 1; }
        }
        @keyframes progressFill {
          0%   { width: 0%; }
          20%  { width: 28%; }
          50%  { width: 55%; }
          75%  { width: 78%; }
          90%  { width: 88%; }
          100% { width: 94%; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "#09090f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Sora', sans-serif",
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    animation: "floatOrb 8s ease-in-out infinite",
    pointerEvents: "none",
  },
  orb1: {
    width: 420,
    height: 420,
    background: "radial-gradient(circle, rgba(99,71,255,0.18) 0%, transparent 70%)",
    top: "10%",
    left: "15%",
    animationDuration: "9s",
  },
  orb2: {
    width: 320,
    height: 320,
    background: "radial-gradient(circle, rgba(0,210,180,0.13) 0%, transparent 70%)",
    bottom: "12%",
    right: "18%",
    animationDuration: "11s",
    animationDelay: "-3s",
  },
  orb3: {
    width: 250,
    height: 250,
    background: "radial-gradient(circle, rgba(255,100,130,0.10) 0%, transparent 70%)",
    top: "55%",
    left: "60%",
    animationDuration: "13s",
    animationDelay: "-6s",
  },
  grain: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
    backgroundSize: "200px",
    pointerEvents: "none",
    opacity: 0.5,
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 28,
    position: "relative",
    zIndex: 10,
  },
  spinnerWrapper: {
    position: "relative",
    width: 110,
    height: 110,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ring: {
    position: "absolute",
    borderRadius: "50%",
    border: "2px solid transparent",
  },
  ring1: {
    width: 110,
    height: 110,
    borderTopColor: "rgba(99,71,255,0.9)",
    borderRightColor: "rgba(99,71,255,0.2)",
    animation: "spin1 1.4s cubic-bezier(0.4,0,0.2,1) infinite",
  },
  ring2: {
    width: 80,
    height: 80,
    borderTopColor: "rgba(0,210,180,0.85)",
    borderLeftColor: "rgba(0,210,180,0.2)",
    animation: "spin2 1.8s cubic-bezier(0.4,0,0.2,1) infinite",
  },
  ring3: {
    width: 54,
    height: 54,
    borderTopColor: "rgba(255,255,255,0.6)",
    borderBottomColor: "rgba(255,255,255,0.1)",
    animation: "spin3 1.1s linear infinite",
  },
  innerDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "radial-gradient(circle, #fff 0%, rgba(99,71,255,0.8) 100%)",
    boxShadow: "0 0 14px 4px rgba(99,71,255,0.6)",
    animation: "pulse 1.6s ease-in-out infinite",
  },
  brand: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: "0.45em",
    color: "rgba(255,255,255,0.25)",
    textTransform: "uppercase",
    marginTop: -4,
  },
  message: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    color: "rgba(255,255,255,0.55)",
    letterSpacing: "0.03em",
    transition: "opacity 0.4s ease, transform 0.4s ease",
    display: "flex",
    alignItems: "baseline",
    gap: 1,
  },
  dots: {
    display: "inline-flex",
    marginLeft: 2,
  },
  dot: {
    display: "inline-block",
    animation: "blink 1.2s infinite",
    color: "rgba(99,71,255,0.9)",
    fontWeight: 600,
  },
  progressTrack: {
    width: 160,
    height: 2,
    background: "rgba(255,255,255,0.07)",
    borderRadius: 99,
    overflow: "hidden",
    marginTop: 8,
  },
  progressBar: {
    height: "100%",
    borderRadius: 99,
    background: "linear-gradient(90deg, #6347ff, #00d2b4, #6347ff)",
    backgroundSize: "200% auto",
    animation: "progressFill 6s ease forwards, shimmer 2s linear infinite",
  },
};