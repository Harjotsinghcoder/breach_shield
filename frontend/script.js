// ==========================================
// BREACH SHIELD - DASHBOARD DATA
// ==========================================

const dashboardData = {
    networkStatus: "MONITORING",
    threatLevel: "MEDIUM",
    activeIncidents: 2,
    aiConfidence: "91%",

    predictedAttack: "Brute Force Attack",
    predictionConfidence: "91%",

    xai: {
        flowActivity: "High",
        packetBehaviour: "Suspicious",
        destinationPorts: "Multiple",
        attackPattern: "Brute Force"
    }
};
// ==========================================
// UPDATE DASHBOARD hello bhumika
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("predicted-attack").textContent =
        dashboardData.predictedAttack;

    document.getElementById("confidence-value").textContent =
        dashboardData.predictionConfidence;

    document.getElementById("xai-flow").textContent =
        dashboardData.xai.flowActivity;

    document.getElementById("xai-packets").textContent =
        dashboardData.xai.packetBehaviour;

    document.getElementById("xai-ports").textContent =
        dashboardData.xai.destinationPorts;

    document.getElementById("xai-pattern").textContent =
        dashboardData.xai.attackPattern;
});
