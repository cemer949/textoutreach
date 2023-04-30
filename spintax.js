document.getElementById("generateSpintax").addEventListener("click", () => {
  const campaignMessage = document.getElementById("campaignMessage").value;
  const variations = document.getElementById("variations").value;

  const spintax = generateSpintax(campaignMessage, variations);
  document.getElementById("spintaxPreview").value = spintax;
});

document.getElementById("copyToClipboard").addEventListener("click", () => {
  const spintaxPreview = document.getElementById("spintaxPreview");
  spintaxPreview.select();
  document.execCommand("copy");

  // Show a temporary message to indicate copying was successful
  const copyButton = document.getElementById("copyToClipboard");
  const originalText = copyButton.textContent;
  copyButton.textContent = "Copied!";
  setTimeout(() => {
    copyButton.textContent = originalText;
  }, 2000);
});

function generateSpintax(campaignMessage, variations) {
  const variationsArray = variations.split("\n").map(line => line.split("/"));
  let spintax = campaignMessage;

  variationsArray.forEach(variation => {
    const variationText = `[${variation.join("|")}]`;
    spintax = spintax.replace(variation[0], variationText);
  });

  return spintax;
}
