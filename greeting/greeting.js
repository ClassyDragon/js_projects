// Javascript (Node)
// Display the current data and time.
function Greeting(name, format) {
    let today = new Date();
    let date;
    let time;
    let period = (today.getHours() > 12) ? 'PM' : 'AM';
    if (format == 'US') {
        date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
        time = (today.getHours() % 12) + ":" + today.getMinutes() + "." + today.getSeconds() + ' ' + period;
    }
    else if (format == 'EU') {
        date = (today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear());
        time = today.getHours() + ':' + today.getMinutes() + '.' + today.getSeconds();
    }
    console.log('Hello, ' + name + '!');
    console.log("Today's date is " + date);
    console.log("The current time is " + time);
}

let name = process.argv[2];
let format = process.argv[3];
let valid_formats = [ 'US', 'EU' ];
if (process.argv.length < 4) {
    console.log("Usage: node greeting.js [your name] [time format]");
    console.log("\tTime formats: US EU");
}
else {
    if (valid_formats.find(element => element == format) == undefined) {
        console.log(format + " is not a valid time format!");
        console.log("\tTime formats: US EU");
    }
    else {
        Greeting(name, format);
    }
}
