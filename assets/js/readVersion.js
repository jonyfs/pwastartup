$(document).ready(function() {
    $.getJSON("version.json", function(json) {
        console.log(json); // this will show the info it in firebug console

        document.getElementById('build-date').innerHTML = 'Build Date:' + json.buildDate;
    });
});