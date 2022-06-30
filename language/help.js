/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, ~~`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

  *⏰ Time Server : ${time}*
  *📚 List Menu : ${botname}*

  *VERMELION MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}buffland 
  *≻* ${prefix}listlvling
  *≻* ${prefix}rules
  *≻* ${prefix}gemdye
  *≻* ${prefix}inviter
  *≻* ${prefix}gconnection
  *≻* ${prefix}Forminfo [Formulir Newmember] 
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc 
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote [pemilihan sesuatu]
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ *Rpg-Absen*
• .daily (Ⓛ)
• .gethadiah
• .hadiah
• .monthly (Ⓛ)
• .weekly (Ⓛ)


 *Rpg*
• .adventure (Ⓛ)
• .pull <jumlah> (Ⓛ)
• .pullall (Ⓛ)
• .atm <jumlah> (Ⓛ)
• .atmall (Ⓛ)
• .berkebon (Ⓛ)
• .feed [pet type] (Ⓛ)
• .open <crate> (Ⓛ)
• .heal (Ⓛ)
• .inv (Ⓛ)
• .kolam (Ⓛ)
• .leaderboard [jumlah user]
• .membunuh *@tag* (Ⓛ)
• .meracik [type] (Ⓛ)
• .merampok *@tag* (Ⓛ)
• .mulung (Ⓛ)
• .nambang (Ⓛ)
• .nebang (Ⓛ)
• .ramuan [pet type] (Ⓛ)
• .shop <sell|buy> <args> (Ⓛ)
• .shopfish <sell|buy> <args> (Ⓛ)
• .transfer (Ⓛ)


 *Game*
• .asahotak (Ⓛ)
• .caklontong (Ⓛ)
• .delttt (Ⓛ)
• .dungeon [nama room]
• .family100 (Ⓛ)
• .fighting (Ⓛ)
• .hunter (Ⓛ)
• .pancing <type> (Ⓛ)
• .judi <jumlah> (Ⓛ)
• .lengkapikalimat (Ⓛ)
• .math <mode> (Ⓛ)
• .siapakahaku (Ⓛ)
• .suit (Ⓛ)
• .suitpvp @tag (Ⓛ)
• .susunkata (Ⓛ)
• .tebakanime (Ⓛ)
• .tebakbendera (Ⓛ)
• .tebakgambar (Ⓛ)
• .tebakgame (Ⓛ)
• .tebakkata (Ⓛ)
• .tebakkimia (Ⓛ)
• .tebaklagu (Ⓛ)
• .tebaklirik (Ⓛ)
• .tekateki (Ⓛ)
• .tictactoe [custom room name] (Ⓛ)
• .ttt [custom room name] (Ⓛ)


 *Exp, Limit & Pay*
• .buy <jumlah limit>
• .buyall
• .cupon [@user] (Ⓛ)
• .dompet [@user]
• .exp [@user]
• .levelup
• .limit [@user]


 *Sticker*
• .attp <teks> (Ⓛ)
• .emojimix (Ⓛ)
• .semoji (Ⓛ)
• .smeme (Ⓛ)
• .stickercry (Ⓛ)
• .stickerhug (Ⓛ)
• .stickerkiss (Ⓛ)
• .stiker (caption|reply media) (Ⓛ)
• .stiker <url> (Ⓛ)
• .stikergif (caption|reply media) (Ⓛ)
• .stikergif <url> (Ⓛ)
• .stikertelegram <url> (Ⓛ) (Ⓟ)
• .triggered (Ⓛ)
• .ttp <teks>
• .wanted (Ⓛ)
• .wm <packname>|<author> (Ⓛ)


 *Main*
• .afk [alasan] (Ⓛ)
• .ceksn (Ⓛ)
• .menu
• .ref
• .daftar <nama>.<umur>
• .sewa
• .unreg <SERIAL NUMBER>


 *Kerang Ajaib*
• .apakah <teks>? (Ⓛ)
• .kapan <text>? (Ⓛ)
• .kapankah <text>? (Ⓛ)
• .siapa <teks> (Ⓛ)
• .siapakah <teks> (Ⓛ)


 *Quotes*
• .quotesanime (Ⓛ)
• .bucin (Ⓛ)
• .kata <opsi> (Ⓛ)
• .quotes (Ⓛ)


 *Admin*
• .demote <@user>
• .kick @user (Ⓛ)
• .promote <@user>


 *Group*
• .group *open / close*
• .add @user
• .enable <option>
• .disable <option>
• .cekexpired
• .infogrup
• .grouplist
• .grouptime <open/close> <number>
• .kick @user
• .gc
• .group
• .link
• .listadmin
• .hidetag [teks] (Ⓛ)
• .readviewonce
• .revoke
• .setppgroup
• .setdeskgroup <text>
• .setwelcome <teks>
• .tagall <pesan>
• .tagme


 *Internet*
• .anime <judul> (Ⓛ)
• .brainly <soal> (Ⓛ)
• .cecan (Ⓛ)
• .cerpen (Ⓛ)
• .cogan (Ⓛ)
• .get <url> (Ⓛ)
• .gimage <search> (Ⓛ)
• .githubstalk (Ⓛ)
• .google <search> (Ⓛ)
• .igstalk <username> (Ⓛ)
• .kbbi <kata> (Ⓛ)
• .loli (Ⓛ)
• .lirik <teks> (Ⓛ)
• .peta <wilayah> (Ⓛ)
• .neko (Ⓛ)
• .pinterest <text> (Ⓛ)
• .playstore (Ⓛ)
• .ppcouple (Ⓛ)
• .puisi (Ⓛ)
• .ss <url> (Ⓛ)
• .ssf <url> (Ⓛ)
• .translate <lang> <teks> (Ⓛ)
• .waifu (Ⓛ)
• .wikipedia <text> (Ⓛ)


 *Anonymous Chat*
• .start,skip,stop,next
• .sendkontak


 *Downloader*
• .fb <url> (Ⓛ)
• .fb2 <url> (Ⓛ)
• .gitclone <url> (Ⓛ)
• .ig <url> (Ⓛ)
• .igstory <username> (Ⓛ)
• .joox <judul> (Ⓛ)
• .lirplay (Ⓛ)
• .lirplay2 (Ⓛ)
• .mediafire <url> (Ⓛ)
• .play <search> (Ⓛ)
• .play2 <search> (Ⓛ)
• .sfile (Ⓛ)
• .tiktok <url> (Ⓛ)
• .twitter <url> (Ⓛ)
• .ytmp3 <url> [server: id4, en60, en61, en68] (Ⓛ)
• .yta <url> [server: id4, en60, en61, en68] (Ⓛ)
• .ytmp4 <url> [server: id4, en60, en61, en68] (Ⓛ)
• .ytv <url> [server: id4, en60, en61, en68] (Ⓛ)
• .yt <url> [server: id4, en60, en61, en68] (Ⓛ)
• .zippyshare <url> (Ⓛ) (Ⓟ)


 *Berita*
• .cnnnews (Ⓛ)
• .kompasnews (Ⓛ)
• .liputan6 (Ⓛ)
• .metronews (Ⓛ)
• .tribunnews (Ⓛ)


 *Tools*
• .calc <expression> (Ⓛ)
• .carigrup <pencarian> (Ⓛ)
• .del (Ⓛ)
• .delete (Ⓛ)
• .githubsearch <pencarian> (Ⓛ)
• .kalkulator <soal> (Ⓛ)
• .mycontact (Ⓛ)
• .ocr (Ⓛ)
• .totext (Ⓛ)
• .qr <teks> (Ⓛ)
• .qrcode <teks> (Ⓛ)
• .readmore <teks>|<teks> (Ⓛ)
• .q (Ⓛ)
• .spamcall <nomor> (Ⓛ) (Ⓟ)
• .tinyurl <link> (Ⓛ)
• .totalfitur (Ⓛ)
• .tourl (Ⓛ)
• .tts <lang> <teks> (Ⓛ)
• .upload (caption|reply media) (Ⓛ)
• .yts <pencarian> (Ⓛ)
• .ytsearch <pencarian> (Ⓛ)


 *Fun*
• .alay (Ⓛ)
• .artinama [name] (Ⓛ)
• .alay (Ⓛ)
• .dare (Ⓛ)
• .halah <teks> (Ⓛ)
• .hilih <teks> (Ⓛ)
• .huluh <teks> (Ⓛ)
• .heleh <teks> (Ⓛ)
• .holoh <teks> (Ⓛ)
• .jadian (Ⓛ)
• .namaninja <teks> (Ⓛ)
• .rate (Ⓛ)
• .reaction <reply> (Ⓛ)
• .truth (Ⓛ)


 *Database*


 *Voting*
• .cekvote
• .hapusvote
• .mulaivote [alasan] (Ⓛ)
• .upvote
• .devote


 *Absen*
• .absen
• .cekabsen
• .hapusabsen
• .mulaiabsen [teks]


 *Catatan*
• .buatcatatan <title|isi>
• .hapuscatatan title
• .lihatcatatan <title>


 *Jadian*
• .cekpacar (Ⓛ)
• .ikhlasin (Ⓛ)
• .putus (Ⓛ)
• .tembak *@tag* (Ⓛ)
• .terima *@tag* (Ⓛ)
• .tolak *@tag* (Ⓛ)


 *Islami*
• .alquran <114> <1>
• .asmaulhusna [nomor]
• .hadis
• .kisahnabi <name> (Ⓛ)
• .jadwalsalat <kota> (Ⓛ)


 *Owner*
• .prem *@tag|days*
• .banchat
• .ban *@tag|days*
• .block <@user>
• .broadcast <teks>
• .bc <teks>
• .broadcastchats <teks>
• .bcchats <teks>
• .broadcastgroup <teks>
• .bcgc <teks>
• .debounce
• .unprem
• .enable <option>
• .disable <option>
• .delexpired
• .expired <hari>
• .getdatabase
• .getplugin <teks>
• .getsessi
• .resetlimit
• .reset
• .savefile <path>
• .sf <path>
• .setmenu <teks>
• .setmenubefore <teks>
• .setmenuheader <teks>
• .setmenubody <teks>
• .setmenufooter <teks>
• .setmenuafter <teks>
• .setppbot
• .simulate <event> [@mention]
• .otransfer
• .unbanchat
• .unban
• .unblock <@user>


 *Advanced*
• >
• =>


 *Info*
• .allprofile [@user] (Ⓛ)
• .listbanned
• .infocovid <country>
• .owner
• .creator
• .infocuaca <city> (Ⓛ)
• .database (Ⓛ)
• .user (Ⓛ)
• .donasi
• .infogempa (Ⓛ)
• .listpremium (Ⓛ)
• .profile [@user] (Ⓛ)
• .report <fitur> (Ⓛ)
• .ping
• .speed
• .speedtest


 *Audio*
• .tomp3
• .tovn
• .bass [vn] (Ⓛ)
• .blown [vn] (Ⓛ)
• .deep [vn] (Ⓛ)
• .earrape [vn] (Ⓛ)
• .fast [vn] (Ⓛ)
• .fat [vn] (Ⓛ)
• .nightcore [vn] (Ⓛ)
• .reverse [vn] (Ⓛ)
• .robot [vn] (Ⓛ)
• .slow [vn] (Ⓛ)
• .smooth [vn] (Ⓛ)
• .tupai [vn] (Ⓛ)
• .vibra [vn] (Ⓛ)


 *Maker*
• .tahta <teks> (Ⓛ)
• .lolice
• .togif (reply)
• .toimg (reply) (Ⓛ)


*Made by ♡*
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option]  
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}nowplayingbioskop  
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  
  *TELE STICK MENU*
  *≻* ${prefix}gurastick
  *≻* ${prefix}dogestick
  *≻* ${prefix}bucinstick
  *≻* ${prefix}patrick
  
  *RANDOM MENU*
  *≻* ${prefix}coffe
  *≻* ${prefix}quotesanime
  *≻* ${prefix}couple
  *≻* ${prefix}darkjokes
  
  *RANDOM ANIME MENU*
  *≻* ${prefix}loli
  *≻* ${prefix}neko
  *≻* ${prefix}waifu
  *≻* ${prefix}shinobu
  *≻* ${prefix}megumin
  *≻* ${prefix}bully
  *≻* ${prefix}cuddle
  *≻* ${prefix}cry
  *≻* ${prefix}hug
  *≻* ${prefix}awoo
  *≻* ${prefix}kiss
  *≻* ${prefix}lick
  *≻* ${prefix}pat
  *≻* ${prefix}smug
  *≻* ${prefix}bonk
  *≻* ${prefix}yeet
  *≻* ${prefix}blush
  *≻* ${prefix}smile
  *≻* ${prefix}wave
  *≻* ${prefix}highfive
  *≻* ${prefix}handhold
  *≻* ${prefix}nom
  *≻* ${prefix}bite
  *≻* ${prefix}glomp
  *≻* ${prefix}slap
  *≻* ${prefix}kill
  *≻* ${prefix}happy
  *≻* ${prefix}wink
  *≻* ${prefix}poke
  *≻* ${prefix}dance
  *≻* ${prefix}cringe
  *≻* ${prefix}anime
  *≻* ${prefix}waifu
  *≻* ${prefix}husbu
  *≻* ${prefix}neko
  *≻* ${prefix}shinobu
  *≻* ${prefix}waifus 
  *≻* ${prefix}nekos 
  *≻* ${prefix}trap 
  *≻* ${prefix}blowjob 
  
  *TEXT PRO MENU*
  *≻* ${prefix}3dchristmas
  *≻* ${prefix}3ddeepsea
  *≻* ${prefix}americanflag
  *≻* ${prefix}3dscifi
  *≻* ${prefix}3drainbow
  *≻* ${prefix}3dwaterpipe
  *≻* ${prefix}halloweenskeleton
  *≻* ${prefix}sketch
  *≻* ${prefix}bluecircuit
  *≻* ${prefix}space
  *≻* ${prefix}metallic
  *≻* ${prefix}fiction
  *≻* ${prefix}greenhorror
  *≻* ${prefix}transformer
  *≻* ${prefix}berry
  *≻* ${prefix}thunder
  *≻* ${prefix}magma
  *≻* ${prefix}3dcrackedstone
  *≻* ${prefix}3dneonlight
  *≻* ${prefix}impressiveglitch
  *≻* ${prefix}naturalleaves
  *≻* ${prefix}fireworksparkle
  *≻* ${prefix}matrix
  *≻* ${prefix}dropwater
  *≻* ${prefix}harrypotter
  *≻* ${prefix}foggywindow
  *≻* ${prefix}neondevils
  *≻* ${prefix}christmasholiday
  *≻* ${prefix}3dgradient
  *≻* ${prefix}blackpink
  *≻* ${prefix}gluetext
  
  *PHOTO OXY MENU*
  *≻* ${prefix}shadow
  *≻* ${prefix}romantic
  *≻* ${prefix}smoke
  *≻* ${prefix}burnpapper
  *≻* ${prefix}naruto
  *≻* ${prefix}lovemsg
  *≻* ${prefix}grassmsg
  *≻* ${prefix}lovetext
  *≻* ${prefix}coffecup
  *≻* ${prefix}butterfly
  *≻* ${prefix}harrypotter
  *≻* ${prefix}retrolol
  
  *EPHOTO MENU*
  *≻* ${prefix}ffcover
  *≻* ${prefix}crossfire
  *≻* ${prefix}galaxy
  *≻* ${prefix}glass
  *≻* ${prefix}neon
  *≻* ${prefix}beach
  *≻* ${prefix}blackpink
  *≻* ${prefix}igcertificate
  *≻* ${prefix}ytcertificate
  
  *GAME & FUN MENU*
  *≻* ${prefix}simih
  *≻* ${prefix}bagaimanakah
  *≻* ${prefix}kapankah
  *≻* ${prefix}apakah
  *≻* ${prefix}bisakah
  *≻* ${prefix}rate
  *≻* ${prefix}wangy
  *≻* ${prefix}gantengcek
  *≻* ${prefix}cekganteng
  *≻* ${prefix}cantikcek
  *≻* ${prefix}cekcantik
  *≻* ${prefix}sangecek
  *≻* ${prefix}ceksange
  *≻* ${prefix}gaycek
  *≻* ${prefix}cekgay
  *≻* ${prefix}lesbicek
  *≻* ${prefix}halah
  *≻* ${prefix}hilih
  *≻* ${prefix}huluh
  *≻* ${prefix}heleh
  *≻* ${prefix}holoh
  *≻* ${prefix}jadian
  *≻* ${prefix}jodohku
  *≻* ${prefix}tictactoe
  *≻* ${prefix}delttt
  *≻* ${prefix}family100
  *≻* ${prefix}tebak [option]
  *≻* ${prefix}math [mode]
  *≻* ${prefix}suitpvp [@tag]

  *PRIMBON MENU*
  *≻* ${prefix}nomorhoki
  *≻* ${prefix}artimimpi
  *≻* ${prefix}artinama
  *≻* ${prefix}ramaljodoh
  *≻* ${prefix}ramaljodohbali
  *≻* ${prefix}suamiistri
  *≻* ${prefix}ramalcinta
  *≻* ${prefix}cocoknama
  *≻* ${prefix}pasangan
  *≻* ${prefix}jadiannikah
  *≻* ${prefix}sifatusaha
  *≻* ${prefix}rezeki
  *≻* ${prefix}pekerjaan
  *≻* ${prefix}nasib
  *≻* ${prefix}penyakit
  *≻* ${prefix}tarot
  *≻* ${prefix}fengshui
  *≻* ${prefix}haribaik
  *≻* ${prefix}harisangar
  *≻* ${prefix}harisial
  *≻* ${prefix}nagahari
  *≻* ${prefix}arahrezeki
  *≻* ${prefix}peruntungan
  *≻* ${prefix}weton
  *≻* ${prefix}karakter
  *≻* ${prefix}keberuntungan
  *≻* ${prefix}memancing
  *≻* ${prefix}masasubur
  *≻* ${prefix}zodiak
  *≻* ${prefix}shio

  *CERPEN MENU*
  *≻* ${prefix}cerpen anak
  *≻* ${prefix}cerpen bahasa daerah
  *≻* ${prefix}cerpen bahasa inggris
  *≻* ${prefix}cerpen bahasa jawa
  *≻* ${prefix}cerpen bahasa sunda
  *≻* ${prefix}cerpen budaya
  *≻* ${prefix}cerpen cinta
  *≻* ${prefix}cerpen cinta islami
  *≻* ${prefix}cerpen cinta pertama
  *≻* ${prefix}cerpen cinta romantis
  *≻* ${prefix}cerpen cinta sedih
  *≻* ${prefix}cerpen cinta segitiga
  *≻* ${prefix}cerpen cinta sejati
  *≻* ${prefix}cerpen galau
  *≻* ${prefix}cerpen gokil
  *≻* ${prefix}cerpen inspiratif
  *≻* ${prefix}cerpen jepang
  *≻* ${prefix}cerpen kehidupan
  *≻* ${prefix}cerpen keluarga
  *≻* ${prefix}cerpen kisah nyata
  *≻* ${prefix}cerpen korea
  *≻* ${prefix}cerpen kristen
  *≻* ${prefix}cerpen liburan
  *≻* ${prefix}cerpen lingkungan
  *≻* ${prefix}cerpen lucu
  *≻* ${prefix}cerpen malaysia
  *≻* ${prefix}cerpen mengharukan
  *≻* ${prefix}cerpen misteri
  *≻* ${prefix}cerpen motivasi
  *≻* ${prefix}cerpen nasihat
  *≻* ${prefix}cerpen nasionalisme
  *≻* ${prefix}cerpen olahraga
  *≻* ${prefix}cerpen patah hati
  *≻* ${prefix}cerpen penantian
  *≻* ${prefix}cerpen pendidikan
  *≻* ${prefix}cerpen pengalaman pribadi
  *≻* ${prefix}cerpen pengorbanan
  *≻* ${prefix}cerpen penyesalan
  *≻* ${prefix}cerpen perjuangan
  *≻* ${prefix}cerpen perpisahan
  *≻* ${prefix}cerpen persahabatan
  *≻* ${prefix}cerpen petualangan
  *≻* ${prefix}cerpen ramadhan
  *≻* ${prefix}cerpen remaja
  *≻* ${prefix}cerpen renungan
  *≻* ${prefix}cerpen rindu
  *≻* ${prefix}cerpen rohani
  *≻* ${prefix}cerpen romantis
  *≻* ${prefix}cerpen sastra
  *≻* ${prefix}cerpen sedih
  *≻* ${prefix}cerpen sejarah
  *≻* ${prefix}cerpen slice of life
  *≻* ${prefix}cerpen terjemahan
  *≻* ${prefix}cerpen thriller
  
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  *≻* ${prefix}smeme

  *INFORMATION MENU*
  *≻* ${prefix}merdeka-news 
  *≻* ${prefix}kontan-news 
  *≻* ${prefix}cnbc-news 
  *≻* ${prefix}tribun-news 
  *≻* ${prefix}indozone-news 
  *≻* ${prefix}kompas-news 
  *≻* ${prefix}detik-news 
  *≻* ${prefix}daily-news 
  *≻* ${prefix}inews-news 
  *≻* ${prefix}okezone-news 
  *≻* ${prefix}sindo-news 
  *≻* ${prefix}tempo-news 
  *≻* ${prefix}antara-news 
  *≻* ${prefix}cnn-news 
  *≻* ${prefix}fajar-news 
  
  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}runtime
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
  
  *ANONYMOUS MENU*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  
  *ISLAMIC MENU*
  *≻* ${prefix}iqra
  *≻* ${prefix}hadist
  *≻* ${prefix}alquran
  *≻* ${prefix}juzamma
  *≻* ${prefix}tafsirsurah
  
  *VOICE CHANGER*
  *≻* ${prefix}bass
  *≻* ${prefix}blown
  *≻* ${prefix}deep
  *≻* ${prefix}earrape
  *≻* ${prefix}fast
  *≻* ${prefix}fat
  *≻* ${prefix}nightcore
  *≻* ${prefix}reverse
  *≻* ${prefix}robot
  *≻* ${prefix}slow
  *≻* ${prefix}tupai
  
  *OWNER MENU*
  *≻* ${prefix}react [emoji]
  *≻* ${prefix}chat [option]
  *≻* ${prefix}join [link]
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot  
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu
  *≻* ${prefix}setallmenu
  
  *THANKS TO*
  *≻* DikaArdnt
  *≻* ZeeoneOfc
  *≻* FatihArridho
  *≻* Yoga
  *≻* Riy
  *≻* Deff
  *≻* Sanzy
  *≻* Nekel
  *≻* Bagas Prdn
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`Welcome
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`Byeee
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Hai oni-chan ☺️
Thanks For donasi xtall!
Yuk donasi sekarang! 
keuntungan:
1. Jika ada 2 orang yg minjam xtall sama, maka salah satu yg donatur akan di prioritaskan
2. Kamu selalu diutamakan🥰


  *Minat? Langsung chat aja ya cuy 🐦*

  *Contact person Owner* :
  wa.me/62895391158070
  `
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  *VERMILION MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}buffland 
  *≻* ${prefix}listlvling
  *≻* ${prefix}rules
  *≻* ${prefix}dyegem
  *≻* ${prefix}gconnection
  *≻* ${prefix}Forminfo
  *≻* ${prefix}linkgroup
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc  
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote 
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  `
}

exports.searchmenu = (prefix) => {
	return`
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option] 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}forminfo 
  *≻* ${prefix}nowplayingbioskop 
  *≻* ${prefix}aminio 
  *≻* ${prefix}wattpad 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  `
}

exports.telestickmenu = (prefix) => {
	return`
  *TELE STICK MENU*
  *≻* ${prefix}gurastick
  *≻* ${prefix}dogestick
  *≻* ${prefix}bucinstick
  *≻* ${prefix}patrick
`
}

exports.randommenu = (prefix) => {
	return`
  *RANDOM MENU*
  *≻* ${prefix}coffe
  *≻* ${prefix}quotesanime
  *≻* ${prefix}couple
  *≻* ${prefix}darkjokes
  `
}

exports.randomanimemenu = (prefix) => {
	return`
  *RANDOM ANIME MENU*
  *≻* ${prefix}loli
  *≻* ${prefix}neko
  *≻* ${prefix}waifu
  *≻* ${prefix}shinobu
  *≻* ${prefix}megumin
  *≻* ${prefix}bully
  *≻* ${prefix}cuddle
  *≻* ${prefix}cry
  *≻* ${prefix}hug
  *≻* ${prefix}awoo
  *≻* ${prefix}kiss
  *≻* ${prefix}lick
  *≻* ${prefix}pat
  *≻* ${prefix}smug
  *≻* ${prefix}bonk
  *≻* ${prefix}yeet
  *≻* ${prefix}blush
  *≻* ${prefix}smile
  *≻* ${prefix}wave
  *≻* ${prefix}highfive
  *≻* ${prefix}handhold
  *≻* ${prefix}nom
  *≻* ${prefix}bite
  *≻* ${prefix}glomp
  *≻* ${prefix}slap
  *≻* ${prefix}kill
  *≻* ${prefix}happy
  *≻* ${prefix}wink
  *≻* ${prefix}poke
  *≻* ${prefix}dance
  *≻* ${prefix}cringe
  *≻* ${prefix}anime
  *≻* ${prefix}waifu
  *≻* ${prefix}husbu
  *≻* ${prefix}neko
  *≻* ${prefix}shinobu
  *≻* ${prefix}waifus 
  *≻* ${prefix}nekos 
  *≻* ${prefix}trap 
  *≻* ${prefix}blowjob 
  `
}

exports.textpromenu = (prefix) => {
	return`
  *TEXT PRO MENU*
  *≻* ${prefix}3dchristmas
  *≻* ${prefix}3ddeepsea
  *≻* ${prefix}americanflag
  *≻* ${prefix}3dscifi
  *≻* ${prefix}3drainbow
  *≻* ${prefix}3dwaterpipe
  *≻* ${prefix}halloweenskeleton
  *≻* ${prefix}sketch
  *≻* ${prefix}bluecircuit
  *≻* ${prefix}space
  *≻* ${prefix}metallic
  *≻* ${prefix}fiction
  *≻* ${prefix}greenhorror
  *≻* ${prefix}transformer
  *≻* ${prefix}berry
  *≻* ${prefix}thunder
  *≻* ${prefix}magma
  *≻* ${prefix}3dcrackedstone
  *≻* ${prefix}3dneonlight
  *≻* ${prefix}impressiveglitch
  *≻* ${prefix}naturalleaves
  *≻* ${prefix}fireworksparkle
  *≻* ${prefix}matrix
  *≻* ${prefix}dropwater
  *≻* ${prefix}harrypotter
  *≻* ${prefix}foggywindow
  *≻* ${prefix}neondevils
  *≻* ${prefix}christmasholiday
  *≻* ${prefix}3dgradient
  *≻* ${prefix}blackpink
  *≻* ${prefix}gluetext
  `
}

exports.photooxymenu = (prefix) => {
	return`
  *PHOTO OXY MENU*
  *≻* ${prefix}shadow
  *≻* ${prefix}romantic
  *≻* ${prefix}smoke
  *≻* ${prefix}burnpapper
  *≻* ${prefix}naruto
  *≻* ${prefix}lovemsg
  *≻* ${prefix}grassmsg
  *≻* ${prefix}lovetext
  *≻* ${prefix}coffecup
  *≻* ${prefix}butterfly
  *≻* ${prefix}harrypotter
  *≻* ${prefix}retrolol
  `
}

exports.ephotomenu = (prefix) => {
	return`
  *EPHOTO MENU*
  *≻* ${prefix}ffcover
  *≻* ${prefix}crossfire
  *≻* ${prefix}galaxy
  *≻* ${prefix}glass
  *≻* ${prefix}neon
  *≻* ${prefix}beach
  *≻* ${prefix}blackpink
  *≻* ${prefix}igcertificate
  *≻* ${prefix}ytcertificate
  `
}

exports.funmenu = (prefix) => {
	return`
  *GAME & FUN MENU*
  *≻* ${prefix}simih
  *≻* ${prefix}bagaimanakah
  *≻* ${prefix}kapankah
  *≻* ${prefix}apakah
  *≻* ${prefix}bisakah
  *≻* ${prefix}rate
  *≻* ${prefix}wangy
  *≻* ${prefix}gantengcek
  *≻* ${prefix}cekganteng
  *≻* ${prefix}cantikcek
  *≻* ${prefix}cekcantik
  *≻* ${prefix}sangecek
  *≻* ${prefix}ceksange
  *≻* ${prefix}gaycek
  *≻* ${prefix}cekgay
  *≻* ${prefix}lesbicek
  *≻* ${prefix}halah
  *≻* ${prefix}hilih
  *≻* ${prefix}huluh
  *≻* ${prefix}heleh
  *≻* ${prefix}holoh
  *≻* ${prefix}jadian
  *≻* ${prefix}jodohku
  *≻* ${prefix}tictactoe
  *≻* ${prefix}delttt
  *≻* ${prefix}family100
  *≻* ${prefix}tebak
  *≻* ${prefix}math
  *≻* ${prefix}suitpvp [@tag]
  `
}

exports.primbonmenu = (prefix) => {
	return`
  *PRIMBON MENU*
  *≻* ${prefix}nomorhoki
  *≻* ${prefix}artimimpi
  *≻* ${prefix}artinama
  *≻* ${prefix}ramaljodoh
  *≻* ${prefix}ramaljodohbali
  *≻* ${prefix}suamiistri
  *≻* ${prefix}ramalcinta
  *≻* ${prefix}cocoknama
  *≻* ${prefix}pasangan
  *≻* ${prefix}jadiannikah
  *≻* ${prefix}sifatusaha
  *≻* ${prefix}rezeki
  *≻* ${prefix}pekerjaan
  *≻* ${prefix}nasib
  *≻* ${prefix}penyakit
  *≻* ${prefix}tarot
  *≻* ${prefix}fengshui
  *≻* ${prefix}haribaik
  *≻* ${prefix}harisangar
  *≻* ${prefix}harisial
  *≻* ${prefix}nagahari
  *≻* ${prefix}arahrezeki
  *≻* ${prefix}peruntungan
  *≻* ${prefix}weton
  *≻* ${prefix}karakter
  *≻* ${prefix}keberuntungan
  *≻* ${prefix}memancing
  *≻* ${prefix}masasubur
  *≻* ${prefix}zodiak
  *≻* ${prefix}shio
  `
}

exports.cerpenmenu = (prefix) => {
	return`
  *CERPEN MENU*
  *≻* ${prefix}cerpen anak
  *≻* ${prefix}cerpen bahasa daerah
  *≻* ${prefix}cerpen bahasa inggris
  *≻* ${prefix}cerpen bahasa jawa
  *≻* ${prefix}cerpen bahasa sunda
  *≻* ${prefix}cerpen budaya
  *≻* ${prefix}cerpen cinta
  *≻* ${prefix}cerpen cinta islami
  *≻* ${prefix}cerpen cinta pertama
  *≻* ${prefix}cerpen cinta romantis
  *≻* ${prefix}cerpen cinta sedih
  *≻* ${prefix}cerpen cinta segitiga
  *≻* ${prefix}cerpen cinta sejati
  *≻* ${prefix}cerpen galau
  *≻* ${prefix}cerpen gokil
  *≻* ${prefix}cerpen inspiratif
  *≻* ${prefix}cerpen jepang
  *≻* ${prefix}cerpen kehidupan
  *≻* ${prefix}cerpen keluarga
  *≻* ${prefix}cerpen kisah nyata
  *≻* ${prefix}cerpen korea
  *≻* ${prefix}cerpen kristen
  *≻* ${prefix}cerpen liburan
  *≻* ${prefix}cerpen lingkungan
  *≻* ${prefix}cerpen lucu
  *≻* ${prefix}cerpen malaysia
  *≻* ${prefix}cerpen mengharukan
  *≻* ${prefix}cerpen misteri
  *≻* ${prefix}cerpen motivasi
  *≻* ${prefix}cerpen nasihat
  *≻* ${prefix}cerpen nasionalisme
  *≻* ${prefix}cerpen olahraga
  *≻* ${prefix}cerpen patah hati
  *≻* ${prefix}cerpen penantian
  *≻* ${prefix}cerpen pendidikan
  *≻* ${prefix}cerpen pengalaman pribadi
  *≻* ${prefix}cerpen pengorbanan
  *≻* ${prefix}cerpen penyesalan
  *≻* ${prefix}cerpen perjuangan
  *≻* ${prefix}cerpen perpisahan
  *≻* ${prefix}cerpen persahabatan
  *≻* ${prefix}cerpen petualangan
  *≻* ${prefix}cerpen ramadhan
  *≻* ${prefix}cerpen remaja
  *≻* ${prefix}cerpen renungan
  *≻* ${prefix}cerpen rindu
  *≻* ${prefix}cerpen rohani
  *≻* ${prefix}cerpen romantis
  *≻* ${prefix}cerpen sastra
  *≻* ${prefix}cerpen sedih
  *≻* ${prefix}cerpen sejarah
  *≻* ${prefix}cerpen slice of life
  *≻* ${prefix}cerpen terjemahan
  *≻* ${prefix}cerpen thriller
`
}

exports.convertmenu = (prefix) => {
	return`
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  `
}

exports.informationmenu = (prefix) => {
	return`
  *INFORMATION MENU*
  *≻* ${prefix}merdeka-news 
  *≻* ${prefix}kontan-news 
  *≻* ${prefix}cnbc-news 
  *≻* ${prefix}tribun-news 
  *≻* ${prefix}indozone-news 
  *≻* ${prefix}kompas-news 
  *≻* ${prefix}detik-news 
  *≻* ${prefix}daily-news 
  *≻* ${prefix}inews-news 
  *≻* ${prefix}okezone-news 
  *≻* ${prefix}sindo-news 
  *≻* ${prefix}tempo-news 
  *≻* ${prefix}antara-news 
  *≻* ${prefix}cnn-news 
  *≻* ${prefix}fajar-news
`
}

exports.mainmenu = (prefix) => {
	return`
  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}din
  *≻* ${prefix}speed
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  *ANONYMOUS CHAT*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  `
}

exports.islamicmenu = (prefix) => {
	return`
  *ISLAMIC MENU*
  *≻* ${prefix}iqra
  *≻* ${prefix}hadist
  *≻* ${prefix}alquran
  *≻* ${prefix}juzamma
  *≻* ${prefix}tafsirsurah
  `
}

exports.voicechargermenu = (prefix) => {
	return`
  *VOICE CHANGER*
  *≻* ${prefix}bass
  *≻* ${prefix}blown
  *≻* ${prefix}deep
  *≻* ${prefix}earrape
  *≻* ${prefix}fast
  *≻* ${prefix}fat
  *≻* ${prefix}nightcore
  *≻* ${prefix}reverse
  *≻* ${prefix}robot
  *≻* ${prefix}slow
  *≻* ${prefix}tupai
  `
}

exports.ownermenu = (prefix) => {
	return`
  *OWNER MENU*
  *≻* ${prefix}react
  *≻* ${prefix}chat
  *≻* ${prefix}join
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu 
  *≻* ${prefix}setallmenu 
  `
}

//tqto gsh di hps y :) kalau mai tmbhin aja nama kalian!
exports.thanksto = () => {
	return`
  *THANKS TO*
  *≻* DikaArdnt

`
}
