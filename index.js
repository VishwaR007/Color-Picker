
let leftBoxClolr = document.getElementById("firstBox");
let leftBoxClolrVal = document.getElementById("firstBox").value;
let rightBoxClolr = document.getElementById("secondBox");
let rightBoxClolrVal = document.getElementById("secondBox").value;

leftBoxClolr.addEventListener("input", function () {
    leftBoxClolrVal = this.value;
    document.getElementById('container').style.background = `linear-gradient(to right, ${leftBoxClolrVal}, ${rightBoxClolrVal})`;
    // document.getElementById('container').style.backgroundImage = `linear-gradient(to right ,${leftBoxClolrVal}, ${rightBoxClolr})`;
});

rightBoxClolr.addEventListener("input", function () {
    rightBoxClolrVal = this.value;
    document.getElementById('container').style.background = `linear-gradient(to right, ${leftBoxClolrVal}, ${rightBoxClolrVal})`
})
