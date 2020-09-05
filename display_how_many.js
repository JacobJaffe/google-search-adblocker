
function insertBefore(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function main() {
    const hiddenAdList = document.getElementsByClassName("ads-fr");
    const numHiddenAds = hiddenAdList.length;
    console.log(numHiddenAds)

    const noAdsInfo = document.createElement("nobr");
    noAdsInfo.innerHTML = `${numHiddenAds} ads hidden | `;

    const resultStats = document.getElementById("result-stats");
    resultStats.prepend(noAdsInfo)
}

main();