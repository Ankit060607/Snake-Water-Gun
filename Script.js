let user = prompt("Enter S, W and G");
let cpu1 = Math.floor(Math.random() * 3);
console.log(cpu1);
let cpu = ["S", "W", "G"][cpu1];
const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobady";
  }

  else if (cpu === "G" && user === "W") {
    return "user";
  }

  else if (cpu === "G" && user === "S") {
    return "cpu";
  }

  else if (cpu === "W" && user === "S") {
    return "user";
  }

  else if (cpu === "W" && user === "G") {
    return "cpu";
  }

  else if (cpu === "S" && user === "W") {
    return "cpu";
  }
  else if (cpu === "S" && user === "G") {
    return "user";
  }

  else {
    console.log("You Typed Invalid Number Please Check The Number ! ")
  }

}
let result = match(cpu, user);
document.write(`CPU : ${cpu} and the USER : ${user} <br> ` + "WIN : " + result);