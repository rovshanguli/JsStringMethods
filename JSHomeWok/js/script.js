//Task1
/* function sortNumbers(arr) {
    arr.sort((a, b) => a - b);
    arr.reverse();
    console.log(arr);
}

let nums = [4, 1, 21, 0, 17, 29];
sortNumbers(nums); */




//Task2
/* function months(arr) {
    let newArr = [];
    for (const month of arr) {
        switch (month) {
            case "Yanvar":
                newArr.push("Yanvar-1")
                break;
            case "Fevral":
                newArr.push("Fevral-2")
                break;
            case "Mart":
                newArr.push("Mart-3")
                break;
            case "Aprel":
                newArr.push("Aprel-4")
                break;
            case "May":
                newArr.push("May-5")
                break;
            case "Iyun":
                newArr.push("Iyun-6")
                break;
            case "Iyul":
                newArr.push("Iyul-7")
                break;
            case "Avqust":
                newArr.push("Avqust-8")
                break;
            case "Sentyabr":
                newArr.push("Sentyabr-9")
                break;
            case "Oktyabr":
                newArr.push("Oktyabr-10")
                break;
            case "Noyabr":
                newArr.push("Noyabr-11")
                break;
            case "Dekabr":
                newArr.push("Dekabr-12")
                break;
        }
    }
    return newArr;
}

let monthArr = ["Yanvar", "Noyabr", "Oktyabr", "Fevral"];
console.log(months(monthArr));
 */


//Task3
function lengthOfWords(sentence) {
    const words = sentence.split(' ');
    let lengthOfWord = [];
    for (const item of words) {
        lengthOfWord.push(item.length);
    }
    return lengthOfWord;
}

console.log(lengthOfWords("Salam olsun hamiya"));