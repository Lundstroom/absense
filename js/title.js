if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = [ "a", "ab", "abs", "abse", "absen", "absens", "absense", "absense.", "absense.c", "absense.cc", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];


}
