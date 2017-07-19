//capitalize the first letter of each word. Words will be separated by only one space.
function LetterCapitalize(str) {
	// body...
	if(isNaN(str)){
	var strarray = str.split(" ");
	var colling=[];

	if(str.length=0){
str.charAt(0).toUpperCase()+str.slice(1);
console.log(str);
	}else{
	for (var i = 0; i < strarray.length; i++) {
		colling.push(strarray[i].charAt(0).toUpperCase()+strarray[i].slice(1));
	}
	console.log(colling.join(" "));
}
}else{

	alert("Only string accepted");
}
}

LetterCapitalize("the");
