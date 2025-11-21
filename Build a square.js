function generateShape(integer){
    let line = "+".repeat(integer);
    return Array(integer).fill(line).join("\n");
}

console.log(generateShape(3));