// Student Grade Generator(Toy Problem)
var grade = "";
{
  let percentage = ("50");
  if (percentage > 79) {
   console.log(grade = "A");
  } else if (percentage <= 60 && percentage > 59) {
    console.log(grade = "B");
  } else if (percentage <= 59 && percentage > 49) {
    console.log(grade = "C");
  } else if (percentage <= 49 && percentage > 40) {
    console.log(grade = "D");
  } else if (percentage < 40) {
    console.log(grade = "E");
  }
}

//Speed Detector
let speed = ("200");
if (speed <= 70) {
  console.log("OK");
}else {
  console.log("points"+((speed-70)/5));
}if (((speed-70)/5)>12) {
  console.log("license suspended");
}