const connectBtn = document.getElementById("connectBtn");
const statusText = document.getElementById("status");
const balanceCard = document.getElementById("balanceCard");
const balanceText = document.getElementById("balance");
const networkSelect = document.getElementById("networkSelect");

let connected = false;
let walletAddress = "";
let balance = 0;

function fakeAddress() {
  return (
    "0x" +
    Math.random().toString(16).substring(2, 10) +
    "..." +
    Math.random().toString(16).substring(2, 6)
  );
}

function fakeBalance() {
  return (Math.random() * 50).toFixed(2);
}

connectBtn.addEventListener("click", () => {
  if (!connected) {
    connected = true;
    walletAddress = fakeAddress();
    balance = fakeBalance();

    statusText.innerHTML = `
      <span style="color:#00ffaa;">Connected</span><br/>
      <small>${walletAddress}</small>
    `;

    balanceText.textContent = `${balance} SUI`;
    balanceCard.style.display = "block";

    connectBtn.textContent = "Disconnect Wallet";
    connectBtn.style.background = "#ff4d4d";
  } else {
    connected = false;

    statusText.innerHTML = `
      <span style="color:#ff4d4d;">Not connected</span>
    `;

    balanceCard.style.display = "none";

    connectBtn.textContent = "Connect Wallet";
    connectBtn.style.background = "#00aaff";
  }
});

networkSelect.addEventListener("change", () => {
  if (connected) {
    balance = fakeBalance();
    balanceText.textContent = `${balance} SUI`;
  }
});