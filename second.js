// FIRST ATTEMPT : 

// var leftBoxClolr = document.getElementById('firstBox').value;
// var rightBoxClolr = document.getElementById('secondBox').value;

// console.log("Left Before : " + leftBoxClolr);
// console.log("Right Before : " + rightBoxClolr);

// function allInOneChange() {
//     leftBoxClolr = document.getElementById('firstBox').value;
//     rightBoxClolr = document.getElementById('secondBox').value;

//     console.log(document.getElementById("firstBox"));
//     console.log(document.getElementById("firstBox").value);

//     document.getElementById('container').style.backgroundImage = `linear-gradient(to right ,${leftBoxClolr}, ${rightBoxClolr})`;
//     document.getElementById('container').style.backgroundImage = `linear-gradient(to right ,${leftBoxClolr}, ${rightBoxClolr})`;

//     console.log("Left : " + leftBoxClolr);
//     console.log("Right : " + rightBoxClolr);

// }

// document.getElementById('container').style.backgroundImage = `linear-gradient(to right ,${leftBoxClolr}, ${rightBoxClolr})`;





// SECOND ATTEMPT : 

var leftBoxClolr = document.getElementById('firstBox').value;
var rightBoxClolr = document.getElementById('secondBox').value;

function abc(id) {
    // var leftBoxClolr = this.value;
    // var rightBoxClolr = this.value;

    // console.log("Left : " + leftBoxClolr);
    // console.log("Right : " + rightBoxClolr);

    // document.getElementById('firstBox').value = leftBoxClolr;
    // document.getElementById('secondBox').value = rightBoxClolr;

    // console.log("This Laft : " + this.value);




    // document.getElementById(id).value = value;

    if (id === 'firstBox') {
        console.log(id);

        document.getElementById('container').style.background = `linear-gradient(to right, ${this.value}, ${rightBoxClolr})`;
    } else if (id === 'secondBox') {
        console.log(id);
        document.getElementById('container').style.background = `linear-gradient(to right, ${leftBoxClolr}, ${this.value})`;
    }

    // document.getElementById('container').style.background = `linear-gradient(to right, ${leftBoxClolrVal}, ${rightBoxClolrVal})`;
    // document.getElementById('container').style.backgroundImage = `linear-gradient(to right ,${this.value}, ${this.value})`;
    // document.getElementById('container').style.backgroundImage = `linear-gradient(to right ,${leftBoxClolr}, ${rightBoxClolr})`;

    // console.log(document.getElementById('firstBox').value);
    // console.log(document.getElementById('firstBox'));
}









// THIRD ATTEMPT : 

// let leftBoxClolr = document.getElementById("firstBox");
// let leftBoxClolrVal = document.getElementById("firstBox").value;
// let rightBoxClolr = document.getElementById("secondBox");
// let rightBoxClolrVal = document.getElementById("secondBox").value;

// document.getElementById('container').style.background = `linear-gradient(to right, ${leftBoxClolrVal}, ${rightBoxClolrVal})`;

// leftBoxClolr.addEventListener("input", function () {
//     leftBoxClolrVal = this.value;
//     document.getElementById('container').style.background = `linear-gradient(to right, ${leftBoxClolrVal}, ${rightBoxClolrVal})`;
//     // document.getElementById('container').style.backgroundImage = `linear-gradient(to right ,${leftBoxClolrVal}, ${rightBoxClolr})`;
// });

// rightBoxClolr.addEventListener("input", function () {
//     rightBoxClolrVal = this.value;
//     document.getElementById('container').style.background = `linear-gradient(to right, ${leftBoxClolrVal}, ${rightBoxClolrVal})`
// })
