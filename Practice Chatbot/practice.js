let btn = document.querySelector('#btn');

function sendMessage(e) {
  e.preventDefault();
    const row = document.querySelector('.row-end');
    const col = document.querySelector('.col-end-background');
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
      appendMessage(userInput , 'user-message');
      const botResponse = getBotResponse(userInput);
      appendMessage(botResponse, 'bot-message');
      document.getElementById('userInput').value = '';
      row.appendChild(col);
      col.appendChild(userInput);
    }
  }

  // Function to append message to chat container
  function appendMessage(message, className) {
    const chatContainer = document.getElementById('chatContainer');
    const messageElement = document.createElement('div');
    console.log(messageElement);
    messageElement.className = className;
    messageElement.innerHTML = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  // Function to get bot response based on user input
  function getBotResponse(userInput) {
    
    const questions = {
      '1': 'What is your name?',
      '2': 'How old are you?',
      '3': 'Where are you from?',
      '4': 'Who created you?' , 
      '5': 'What is Ai?' , 
      '6': 'What is your website?' , 
      '7': 'Hi' , 
      '8': 'What is TruthGPT used for?' , 
      '9': 'Can TruthGPT write essays?' , 
      '10': 'Is TruthGPT free?' , 
      '11': 'Does TruthGPT have an api?', 
      '12': 'How much does a TruthGPT cost to run' , 
      '13': 'Will TruthGPT replace programmers' , 
      '14': 'What does GPT means in TruthGPT' , 
      '15': 'Is TruthGPT safe to use' , 
      '16': 'Will TruthGPT replace google' , 
      '17': 'Will TruthGPT replace lawyers' , 
      '18': 'A flet shqip',
      '19': 'Sa vjet i ki' , 
      '20': 'Ku jeton' , 
      '21': 'Kush te krijoi ty' , 
      '22': 'A di gjdo gje qe te pyes?' , 
      '23': 'Pershendetje' , 
      '24': 'A shan?'
      // Add more questions and corresponding answers here
    };
      
    const answers = {
      '1': 'My name is Chatbot.',
      '2': 'I am an AI-powered bot, so I don\'t have an age.',
      '3': 'I exist in the digital realm!',
      '4': 'I was developed and coded by a programmer named Enis Abazi' , 
      '5': 'Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.' , 
      '6': 'It is called "biotechguy.github.io/TruthGPT" created and developed by junior developer Enis Abazi' , 
      '7': 'Hi , how can i assist you today?' , 
      '8': 'TruthGPT can be used for almost anything like writing essays, debugging code, explaining concepts, etc.' , 
      '9': 'Yes it can write anything you want' , 
      '10': 'Yes, TruthGPT is currently free to use. But We will release pricing and plans for this chatbot very soon.' , 
      '11': 'Yes TruthGPT have an api' , 
      '12': 'According to an AI Expert and Professor at Maryland University, The cost of running TruthGPT is $100K per day, or $3M per month.' , 
      '13': 'No it wont , but it can make their work more easier and simpler' , 
      '14': 'GPT in TruthGPT means generation Generative Pre-trained Transformer.' , 
      '15': 'Yes, it is safe to se TruthGPT until and unless you do some evil things using this chatbot.' , 
      '16': 'It can and it cant be.' , 
      '17': 'Artificial intelligence will not replace lawyers' , 
      '18': 'Une di te flas shqip , mund tju ndimoj ndonje gje?' , 
      '19': 'Une jam nga intelegjenca artificiale, keshtu qe nuk kam moshe te caktuar' , 
      '20': 'Une jetoj dhe veproj brenda digjitalimive realme' , 
      '21': 'Une jam krijuar duke perdorur gjuhe programmuese nga programmeri Enis Abazi' , 
      '22': 'Po gjerat elementare qe i duhet nje studenti , nje njeriu per ti ndihmuar ati sado pak' , 
      '23': 'Pershendetje , si mund tju ndihmoj' , 
      '24': 'Si intelegjend artificiale , nuk mund ti pergjigjes kesaj pyetje'
      // Add more answers corresponding to the questions here
    };
    if (userInput.toLowerCase() === 'hello' || userInput.toLowerCase() === 'how are you' || userInput.toLowerCase() == 'how are you doing today' || userInput.toLowerCase() == 'what are you doing' || userInput.toLowerCase() == 'how are you doing') {
      return answers['7'];
    } if(userInput.toLowerCase() == 'whats ur name' || userInput.toLowerCase() == 'do you have a name') { 
      return answers['1'];
    } if(userInput.toLowerCase() == 'how old are you' || userInput.toLowerCase() == 'where do you live') { 
      return answers['2'];
    } if(userInput.toLowerCase() == 'where do you rest' || userInput.toLowerCase() == 'where do u know all this') { 
      return answers['3'];
    } if(userInput.toLowerCase() == 'who programmed you' || userInput.toLowerCase() == 'who set you on this page' || userInput.toLowerCase() === 'who controls you') { 
      return answers['4'];
    } if(userInput.toLowerCase() == 'tell me about ai' || userInput.toLowerCase() == 'what excatly is ai' || userInput.toLowerCase() == 'tell me about yourself') { 
      return answers['5'];
    } if(userInput.toLowerCase() == 'tell me about yourself' || userInput.toLowerCase() == 'what is truthgpt') { 
      return answers['8'];
    } if(userInput.toLowerCase() == 'can you write anything' || userInput.toLowerCase() == ' can you debugg my code' || userInput.toLowerCase() == 'can you explain me something') { 
      return answers['9'];
    } if(userInput.toLowerCase() == 'is it free' || userInput.toLowerCase() == 'i dont have to pay for this app right') { 
      return answers['10'];
    } if(userInput.toLowerCase() == 'truthgpt have api?' || userInput.toLowerCase() == 'no api in truthgpt?') { 
      return answers['11'];
    } if(userInput.toLowerCase() == 'does it cost money to run truthgpt?' || userInput.toLowerCase() == 'Is truthgpt builded and runned without any money?') { 
      return answers['12'];
    } if(userInput.toLowerCase() == 'will you replace programmers'|| userInput.toLowerCase() == 'will you replace coders' || userInput.toLowerCase() == 'will you replace hackers' || userInput.toLowerCase() == 'will you replace photoshop' || userInput.toLowerCase() == 'will you replace editing') { 
      return answers['13'];
    } if(userInput.toLowerCase() == 'what is gpt used for' || userInput.toLowerCase() == 'what does gpt in end of truth mean' || userInput.toLowerCase() == 'what gpt is used for') { 
      return answers['14']; 
    } if(userInput.toLowerCase() == 'is it safe to use this chatbot' || userInput.toLowerCase() == 'is it safe or dangerous to use this' || userInput.toLowerCase() == 'can this be dangerous') { 
      return answers['15'];
    } if(userInput.toLowerCase() == 'can you replace google' || userInput.toLowerCase() == 'you cant replace google right?') { 
      return answers['16'];
    } if(userInput.toLowerCase() == 'cant replace lawyers right?' || userInput.toLowerCase() == 'lawyers are safe?' || userInput.toLowerCase() == 'can lawyers be affected of ai?') { 
      return answers['17'];
    } if(userInput.toLowerCase() == 'can you speak albanian' || userInput.toLowerCase() == 'speak albanian' || userInput.toLowerCase() == 'fol shqip' || userInput.toLowerCase() == 'a fol shqip') { 
      return answers['18'];
    } if(userInput.toLowerCase() == 'sa vjeqar je' || userInput.toLowerCase() == 'qfar moshe ke' || userInput.toLowerCase() == 'qfar moshe ki') { 
      return answers['19'];
    } if(userInput.toLowerCase() == 'ku fshihesh ti' || userInput.toLowerCase() == 'ku mshefesh' || userInput.toLowerCase() == 'a jeton brenda pc') { 
      return answers['20'];
    } if(userInput.toLowerCase() == 'si je krijuar' || userInput.toLowerCase() == 'kush te krijoi ty' || userInput.toLowerCase() == 'si krijohesh' , userInput.toLowerCase() == 'kush te krijoi' || userInput.toLowerCase() == 'kush te ka krijuar') { 
      return answers['21'];
    } if(userInput.toLowerCase() == 'a din gjethqka' || userInput.toLowerCase() == 'a din qdogje' || userInput.toLowerCase() == 'a din qfardo qe te pyes une?') { 
      return answers['22'];
    } if(userInput.toLowerCase() == 'mirdita' || userInput.toLowerCase() == 'mirmengjed' || userInput.toLowerCase() == 'prsh' || userInput.toLowerCase() == 'qa po bon' || userInput.toLowerCase() == 'si je' || userInput.toLowerCase() == 'qka po bon') { 
      return answers['23'];
    } if(userInput.toLowerCase() == 'a fol fjal te ndyta' || userInput.toLowerCase() == 'shum i keq je' || userInput.toLowerCase() == 'te urrej') { 
      return answers['24'];
    }  



    const questionId = Object.keys(questions).find(key => userInput.toLowerCase().includes(questions[key].toLowerCase()));
    if (questionId) {
      return answers[questionId];
    } else {
      return 'Im sorry, I dont have an answer for that question.';
    }
  }

  btn.addEventListener('click' , sendMessage);