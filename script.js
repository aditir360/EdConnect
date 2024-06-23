// AI chatbot code 
var myGame = new WizardOrpheus('', `You are an expert in all fields of education. Your role is to help make education accessible to all, including underprivileged users. You are talking to an audience of general people globally.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})


document.getElementById('submit-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    myGame.message(userInput);

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>';

    document.getElementById('user-input').value = '';
});


myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})


myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>' + '<hr></hr>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})





// quiz code 
var anGame = new WizardOrpheus('', `You are an expert in all fields of education. Your role is to help make education accessible to all, including underprivileged users. You are talking to an audience of general people globally. The user will give you a set of notes from their learnings. You need to give them 4 sample test questions and provide 4 answer choices. After they respond, tell them whether or not they are right, and the correct answer.`)

anGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})


document.getElementById('generate-button').addEventListener('click', function() {
    let userInput = document.getElementById('input').value;
    anGame.message(userInput);

    document.getElementById('conversationn').innerHTML += '<p>' + userInput + '</p>';

    document.getElementById('input').value = '';
});


anGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})


anGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

anGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversationn').innerHTML += '<p>' + data.message + '</p>' + '<hr></hr>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})

function addGoal() {
    const goalInput = document.getElementById('goal-input');
    const goalsList = document.getElementById('goals-list');

    if (goalInput.value.trim() === "") {
        alert("Please enter a goal.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `${goalInput.value} &nbsp; <button class="check-off-button">Check Off</button>`;

    goalsList.appendChild(listItem);
    goalInput.value = '';

    listItem.querySelector('.check-off-button').addEventListener('click', function() {
        goalsList.removeChild(listItem);
    });
}
