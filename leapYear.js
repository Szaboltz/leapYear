function itsLeap(year){

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return (year + " é bissexto")
            } else {
                return (year + " não é bissexto")
            }
        } else {
            return (year + " é bissexto")
        }
    } else {
        return (year + " não é bissexto")
    }
}

console.log(itsLeap(1900));