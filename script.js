var button_selected = [1, 2, 3, 4];
var correct;

function start_game() {
  correct = in_game();
  document.getElementById("the_game").style = "display: block";
}

function reset() {
  document.getElementById("the_game").style = "display: none";
  document.getElementById("end_game").style = "display: none";

  // Reset Everything:
  document.getElementById("button_one").innerHTML = "";
  document.getElementById("button_two").innerHTML = "";
  document.getElementById("button_three").innerHTML = "";
  document.getElementById("button_four").innerHTML = "";
  document.getElementById("distro_logo").src = "";

  // Start the game
  start_game();
}

function game_end(correct, answer) {
  document.getElementById("end_game").style = "display: block";
  document.getElementById("correct").innerHTML = `Correct Answer: ${correct}`;
  document.getElementById("you_chose").innerHTML = `You Picked: ${answer}`;
  if (correct === answer) {
    document.getElementById("grade").innerHTML = "CORRECT!!";
  } else {
    document.getElementById("grade").innerHTML = "WRONG!!";
  }
  correct = "";
}

function new_game() {
  document.getElementById("start_game").style = "display: none";
  start_game();
}

function in_game() {
  var distros = [
    "OpenSUSE",
    "Arch",
    "Ubuntu Cinnamon",
    "Mint",
    "Slackware",
    "RHEL",
    "Bodhi",
    "Ubuntu",
    "Kubuntu"
  ];
  var distro_random = Math.floor(Math.random() * Math.floor(9));
  var distro_wrong_one_num = Math.floor(Math.random() * Math.floor(8));
  var distro_wrong_two_num = Math.floor(Math.random() * Math.floor(7));
  var distro_wrong_three_num = Math.floor(Math.random() * Math.floor(6));

  var distro_correct = distros[distro_random];
  distros.splice(distro_random, 1);
  var distro_wrong_one = distros[distro_wrong_one_num];
  distros.splice(distro_wrong_one_num, 1);
  var distro_wrong_two = distros[distro_wrong_two_num];
  distros.splice(distro_wrong_two_num, 1);
  var distro_wrong_three = distros[distro_wrong_three_num];
  distros.splice(distro_wrong_three_num, 1);

  var button_spaces = [1, 2, 3, 4];
  var button_space_correct_num = Math.floor(Math.random() * Math.floor(4));
  var button_space_wrong_one_num = Math.floor(Math.random() * Math.floor(3));
  var button_space_wrong_two_num = Math.floor(Math.random() * Math.floor(2));
  var button_space_wrong_three_num = Math.floor(Math.random() * Math.floor(1)); // Redundancy

  var button_space_correct = button_spaces[button_space_correct_num];
  button_spaces.splice(button_space_correct_num, 1);
  var button_space_wrong_one = button_spaces[button_space_wrong_one_num];
  button_spaces.splice(button_space_wrong_one_num, 1);
  var button_space_wrong_two = button_spaces[button_space_wrong_two_num];
  button_spaces.splice(button_space_wrong_two_num, 1);
  var button_space_wrong_three = button_spaces[button_space_wrong_three_num];
  button_spaces.splice(button_space_wrong_three_num, 1);

  var button_one_element = document.getElementById("button_one");
  var button_two_element = document.getElementById("button_two");
  var button_three_element = document.getElementById("button_three");
  var button_four_element = document.getElementById("button_four");

  // Find where the correct button lands
  if (button_space_correct === 1) {
    button_one_element.innerHTML = distro_correct;
  } else if (button_space_correct === 2) {
    button_two_element.innerHTML = distro_correct;
  } else if (button_space_correct === 3) {
    button_three_element.innerHTML = distro_correct;
  } else {
    button_four_element.innerHTML = distro_correct;
  }

  // Find where the first wrong button lands
  if (button_space_wrong_one === 1) {
    button_one_element.innerHTML = distro_wrong_one;
  } else if (button_space_wrong_one === 2) {
    button_two_element.innerHTML = distro_wrong_one;
  } else if (button_space_wrong_one === 3) {
    button_three_element.innerHTML = distro_wrong_one;
  } else {
    button_four_element.innerHTML = distro_wrong_one;
  }

  // Find where the second wrong button lands
  if (button_space_wrong_two === 1) {
    button_one_element.innerHTML = distro_wrong_two;
  } else if (button_space_wrong_two === 2) {
    button_two_element.innerHTML = distro_wrong_two;
  } else if (button_space_wrong_two === 3) {
    button_three_element.innerHTML = distro_wrong_two;
  } else {
    button_four_element.innerHTML = distro_wrong_two;
  }

  // Find where the third wrong button lands
  if (button_space_wrong_three === 1) {
    button_one_element.innerHTML = distro_wrong_three;
  } else if (button_space_wrong_three === 2) {
    button_two_element.innerHTML = distro_wrong_three;
  } else if (button_space_wrong_three === 3) {
    button_three_element.innerHTML = distro_wrong_three;
  } else {
    button_four_element.innerHTML = distro_wrong_three;
  }

  // Show the logo!!
  var img_element = document.getElementById("distro_logo");

  if (distro_correct === "Kubuntu") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2F1200px-Kubuntu_logo.svg.png?v=1582936465671";
  } else if (distro_correct === "Arch") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2Farch.png?v=1582936476438";
  } else if (distro_correct === "OpenSUSE") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2Fopensuselol.png?v=1582936477897";
  } else if (distro_correct === "Ubuntu Cinnamon") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2FcommunityIcon_bfco35tdkmd41.png?v=1582936483191";
  } else if (distro_correct === "Mint") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2Fexternal-content.duckduckgo.com.png?v=1582936485072";
  } else if (distro_correct === "RHEL") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2Fredhat.png?v=1582937278213";
  } else if (distro_correct === "Ubuntu") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2Fubuntu.png?v=1582937278399";
  } else if (distro_correct === "Slackware") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2F1200px-Slackware_logo.svg.png?v=1582937278623";
  } else if (distro_correct === "Bodhi") {
    img_element.src =
      "https://cdn.glitch.com/d4118b4d-3381-4abd-a6fe-4e50902ffa50%2FLEAFLOGO.png?v=1582939989340";
  }

  return distro_correct;
}

// The actual game interaction
function button_one_click() {
  var choice = document.getElementById("button_one").innerHTML;
  game_end(correct, choice);
}

function button_two_click() {
  var choice = document.getElementById("button_two").innerHTML;
  game_end(correct, choice);
}

function button_three_click() {
  var choice = document.getElementById("button_three").innerHTML;
  game_end(correct, choice);
}

function button_four_click() {
  var choice = document.getElementById("button_four").innerHTML;
  game_end(correct, choice);
}
