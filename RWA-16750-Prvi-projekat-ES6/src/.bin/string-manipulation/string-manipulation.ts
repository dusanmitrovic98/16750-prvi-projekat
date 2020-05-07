export function FormatString(stringToBeFormated: string, delimiter: string) {
    let formatedString: string[];
    formatedString = stringToBeFormated.split(delimiter);
    for (var i = 0; i < formatedString.length - 1; i++) {
        for (var j = i + 1; j < formatedString.length; j++) {
            if (formatedString[j] === formatedString[j].toUpperCase()) {
                
            }
        }
    }
    return formatedString;
}