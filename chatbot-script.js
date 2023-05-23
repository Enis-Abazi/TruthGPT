// Importing Api and creating a chatbot in terminal and running it in powershell too

import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openai = new OpenAIApi(
    new Configuration({ 
    apiKey: process.env.API_KEY
}))

const userInterface = readline.createInterface({ 
    input: process.stdin , 
    output: process.stdout
})

userInterface.prompt()
userInterface.on("line" , async input => { 
   const res  = await openai.createChatCompletion({ 
        model: "gpt-3.5-turbo" , 
        messages: [{ role: "user", content: input}]
    })
    console.log(res.data.choices[0].message.content)
    userInterface.prompt()
    
})

console.log(userInterface)

// Failed Chatbot
const btn = document.querySelector('#btn');
const form = document.querySelector('form');
form.addEventListener('submit', sendMessage);


function sendMessage(e) {
    e.preventDefault();
  const userInput = document.getElementById('userInput').value;
  if (userInput) {
    appendMessage(userInput, 'user-message');
    const botResponse = getBotResponse(userInput);
    appendMessage(botResponse, 'bot-message');
    document.getElementById('userInput').value = '';
  }
}

// Function to append message to chat container
function appendMessage(message, className , e) {
  e.preventDefault();
  const chatContainer = document.getElementById('chatContainer');
  const messageElement = document.createElement('div');
  messageElement.className ='message' + className;
  messageElement.innerHTML = message;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to get bot response based on user input
function getBotResponse(userInput) {
  const questions = {
    1: 'What is your name?',
    2: 'How old are you?',
    3: 'Where are you from?',
    // Add more questions and corresponding answers here
  };

  const answers = {
    1: 'My name is Chatbot.',
    2: 'I am an AI-powered bot, so I dont have an age.',
    3: 'I exist in the digital realm!',
    // Add more answers corresponding to the questions here
  };

  const questionId = Object.keys(questions).find((key) =>
  userInput.toLowerCase().includes(questions[key].toLowerCase())
);
  if (questionId) {
    return answers[questionId];
  } else {
    return 'Im sorry, I dont have an answer for that question.';
  }
}

btn.addEventListener('click', sendMessage);
