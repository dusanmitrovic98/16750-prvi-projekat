function firstCharacterToUpperCase(stringToCapitalize: string, firstLetterToUpperCase: boolean = true) {
    if (firstLetterToUpperCase) {
        stringToCapitalize = stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
    }
    return stringToCapitalize;
}

function splitOnUppercaseLetters(stringToSplit: string) {
    let splitedOnUppercaseLetter: string[] = stringToSplit.match(/[A-Z][a-z]+/g);
    return splitedOnUppercaseLetter;
}

function toLowerCaseAndJoinElements(stringArrayToLowerCase: string[], joinSeparator: string) {
    let returnStringValue: string = "";
    stringArrayToLowerCase.forEach(element => {
        returnStringValue = returnStringValue + element.toLowerCase() + joinSeparator;
    })
    return returnStringValue;
}

function ifLastletterIsSpaceThanRemove(stringWithUnneededSpace: string) {
    if (stringWithUnneededSpace.charAt(stringWithUnneededSpace.length - 1) == " ") {
        stringWithUnneededSpace = stringWithUnneededSpace.slice(0, stringWithUnneededSpace.length - 1);
    }
    return stringWithUnneededSpace;
}

export function FormatString(stringToBeFormated: string, joinSeparator: string, firstLetterToUpperCase: boolean = true) {
    let splitedOnUppercaseLetter: string[] = splitOnUppercaseLetters(stringToBeFormated);
    let returnStringValue: string = toLowerCaseAndJoinElements(splitedOnUppercaseLetter, joinSeparator);
    returnStringValue = firstCharacterToUpperCase(returnStringValue, firstLetterToUpperCase);
    returnStringValue = ifLastletterIsSpaceThanRemove(returnStringValue);
    return returnStringValue;
}