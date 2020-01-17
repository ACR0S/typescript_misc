let greeting : string | number = 7

function optGreeting(_greeting : string | number){
    if (typeof _greeting === "string") {
        console.log("It was a string! --> ".concat(_greeting.toLowerCase()));
    }
    else if (typeof _greeting === "number") {
        console.log("It was a number!: ", _greeting ** 2);
    }
    else {
        console.log(`Not supported type ${typeof _greeting}, try again.`);
    }
};

function terciaryGreeting(_greeting: string | number) : string | number {
    return typeof _greeting === "string" ? `Str: ${_greeting}` : _greeting ** 3
};


optGreeting(greeting);
console.log(terciaryGreeting(greeting));
