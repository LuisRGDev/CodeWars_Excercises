function getRectangleString(width, height) {
  let result = "";

    for(let i = 0; i < width; ++i){
        result += "* ";
    }
    result += "\n";

    for(let j = 0; j< height; ++j){
            result += "*" + " ".repeat(width * 2 - 3) + "*\n";
        }

    for(let i = 0; i < width; ++i){
    result += "* ";
    }

    return result; 
}

console.log(getRectangleString(3,3));
