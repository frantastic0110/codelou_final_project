var messageArray =[
'It is certainly cheesey',
'It is decidedly so',
'Without a doubt',
'Yes - definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes'
]

// javascript to run on click for the messages

function tellFortune() {
    var choice = Math.floor(Math.random() * 10);
    // console.log(choice)
    document.getElementById("message").innerHTML=`${messageArray[choice]}`
    // console.log ('helloooo cheese')
}
document.getElementById("ball").addEventListener("click", tellFortune)

