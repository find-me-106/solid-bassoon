// src/pages/MembershipPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MembershipPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve plan details passed via route state
  const { selectedPlan, billingCycle = "monthly" } = location.state || {};

  // If no plan is selected, show a clean, styled fallback
  if (!selectedPlan) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={{ fontSize: "3rem", marginBottom: "12px" }}>💳</div>
          <h2 style={styles.title}>No Plan Selected</h2>
          <p style={styles.subTitle}>
            Please select a membership plan to view cash payment details and proceed.
          </p>
          <button
            onClick={() => navigate("/Subscription")}
            style={styles.actionBtn}
          >
            Browse Subscription Plans
          </button>
        </div>
      </div>
    );
  }

  // Calculate final price based on billing cycle
  const basePrice = parseInt(selectedPlan.price.replace(/[^\d]/g, ""));
  const finalPrice =
    billingCycle === "yearly"
      ? `PKR ${(basePrice * 0.8).toLocaleString()}`
      : selectedPlan.price;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          ← Back
        </button>

        <h2 style={styles.title}>Cash Payment Details</h2>

        <div style={styles.planDetails}>
          Selected Plan:{" "}
          <strong style={{ color: "#ef4444" }}>
            {selectedPlan.name} ({billingCycle})
          </strong>
        </div>

        {/* Cash Payment Information Box */}
        <div style={styles.cashBox}>
          <div style={styles.cashHeader}>
            <span style={{ fontSize: "1.8rem" }}>💵</span>
            <span style={styles.cashTitle}>Front Desk Cash Payment</span>
          </div>

          <p style={styles.amountText}>
            Amount Due:{" "}
            <strong style={{ color: "#38bdf8", fontSize: "1.4rem" }}>
              {finalPrice}
            </strong>
          </p>

          <p style={styles.instructionText}>
            We accept <strong>cash payments only</strong>. Please visit our desk
            at the facility to make your payment and collect your active
            membership pass.
          </p>
        </div>

        <button
          onClick={() => navigate("/Subscription")}
          style={styles.actionBtn}
        >
          Return to Subscription Plans
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "550px",
    margin: "60px auto",
    padding: "0 20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    color: "#f3f4f6",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "36px 28px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    border: "1px solid #334155",
  },
  backBtn: {
    padding: "8px 16px",
    backgroundColor: "#334155",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
    float: "left",
    fontWeight: "600",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    margin: "10px 0 8px 0",
    clear: "both",
  },
  subTitle: {
    color: "#9ca3af",
    fontSize: '0.95rem',
    marginBottom: "24px",
    lineHeight: "1.5",
  },
  planDetails: {
    color: "#9ca3af",
    fontSize: "1.05rem",
    marginBottom: "24px",
  },
  cashBox: {
    backgroundColor: "#0f172a",
    padding: "24px",
    borderRadius: "12px",
    borderLeft: "4px solid #ef4444",
    marginBottom: "24px",
    textAlign: "left",
  },
  cashHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },
  cashTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
  },
  amountText: {
    fontSize: "1rem",
    color: "#cbd5e1",
    margin: "8px 0 16px 0",
  },
  instructionText: {
    color: "#94a3b8",
    lineHeight: "1.5",
    fontSize: "0.95rem",
    margin: 0,
  },
  actionBtn: {
    padding: "14px 24px",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    fontSize: "1rem",
    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
    transition: "background-color 0.2s ease",
  },
};