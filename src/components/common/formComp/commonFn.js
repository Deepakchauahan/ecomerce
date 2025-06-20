export const placeholderCaptilize = (value) => {
    let splitArr = value.split(" ")
    let firstWord = splitArr[0].charAt(0).toUpperCase() + splitArr[0].slice(1)
    return [firstWord, ...splitArr.slice(1)].join(" ")
}
