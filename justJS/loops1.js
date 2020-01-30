let declaration = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";

let words = declaration.split(" ");
console.log(words);
console.log(words.length);

let selectedWords = [];
for (let w = 0; w <= 7; w++) {
	if (testScores.classList[i].score < 70)
		continue;
	passingScores++;
	passingStudents.push(testScores.classList[i].name);
}
console.log("There were " + passingScores + " students who passed.\n" +
	"Passing Students: " + passingStudents);
