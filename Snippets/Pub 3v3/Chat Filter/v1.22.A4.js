// HBINIT Above

const allowedChars = (`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'-!'"#=$@/\:;%/_&~*<>(!?)[]^{}.,`).split("");
const bannedWords = ["fuck","shit","dick","penis","cock","igge","nigger","faggot","nig","n1g","n!g",'n16',"ni6","nagg","nga","ng4","n6a","n64","nger","negg","n3g","ne6","n36","fgt","fag","f4g","f6t","fg+","f6+","f4g","f46","ggot","66ot","gg0t","660+","66o+","r3t","rtar","tard","returd","r3+","re+","+ard","t4rd","cunt","kunt","kys","kill your","go die","go d1e","go d13","sped","pedophi"]

room.onPlayerChat = function (player, message) {
  message = message.split(/ +/);
  // ------ Emoji + Symbol Preventer ------
  var dellowedChar = [false,""];
  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < i.length; j++) {
        if (!allowedChars.includes(message[i][j])) {
            dellowedChar = [true,j]
            break
        }
    }
    if (dellowedChar[0] == true) {
        break
    }
  }
  // --------------------------------------
  // ---------- Anti Slur FIlter ----------
  var profane = false;
    for (let word of bannedWords) {
        if ((JSON.stringify(messageOrig).replaceAll(" ","")).toLowerCase().includes(word)) {
            profane = true
            break
        }
    }
}
