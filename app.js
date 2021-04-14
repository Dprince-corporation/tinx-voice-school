const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');
const navOpen=document.querySelector('.nav-list')
const likeUp = document.querySelector('.like');
const likeDown = document.querySelector('.like-down');

menuOpen.addEventListener('click', () => {
    navOpen.style.display = "block";
    menuOpen.style.display = "none";
})

menuClose.addEventListener('click', () => {
    navOpen.style.display = "none";
    menuOpen.style.display = "block";
})

likeUp.addEventListener('click', () => {
    if (indexNo > 0 - 1) {
        indexNo++;
    }
    numb.innerHTML = indexNo; 
})

let count = 0;
likeDown.addEventListener('click', () => {
     if (count > 0 - 1) {
        count++;
    }
    increase.innerHTML = count; 
})

//aos
AOS.init();

//our recognition page
const start = document.querySelector('.btn');
const content = document.querySelector('.content');
const openPage = document.querySelector('.talk');
const showPage = document.querySelector('.learning-page');
const closePage = document.querySelector('.quit');
const openOptions = document.querySelector('.menu-toggle');
const showOptions = document.querySelector('.options');
const closeOptions = document.querySelector('.menu-close');
const activated = document.querySelector('.demo-box');
const speechSpeed = document.querySelector('.count1');
const ans = document.querySelector('.ans');
const speechError = document.querySelector('.count2');
const showFood = document.querySelector('.dashboard2');
const showSummer = document.querySelector('.dashboard4');
const showStory = document.querySelector('.dashboard5');
const numb = document.querySelector('.increse');
const increase = document.querySelector('.increase');


openPage.addEventListener('click', () => {
    showPage.style.display = "block";
    openPage.style.display = "none";
});

closePage.addEventListener('click', () => {
    window.location.reload();
});


// respond massage
const welcome = ['hello dear, am bumblebee, welcome to tinx voice school how are you'];
const good = ['am feeling just great and am ready to interact with you thank you'];
const goodOne = ['am very good thanks'];
const weather = ["Is a little bit rainy outside my dear, but soon the weather we be cleared"];
const weatherAmerica = ['the weather in america right now is just sunny'];
const birthday = ['my birthday is according to dprince corporation april 3rd 2021'];
const created = ['am not sure but i think i am created in april 2021'];
const human = ['am not a human, am just an A I design to help human race in technology'];
const food = ['no i dont eat food but meditation is my routine'];
const voice = ['yes am really enjoying my conversation with you'];
const suggestFood = ['i think a litte of fried egg and cripsy chicken will be good, take a look at this image'];
const vacation = ["according to reasearch, london is a good place for vacation during summer"];
const story = ["This is the story of the beauty and the beast, a widower merchant lives in a mansion with his twelve children six sons and six daughters. All of his daughters are very beautiful, but the youngest, Beauty, is the most lovely. She is also kind, well-read, and pure of heart; her elder sisters, though, are cruel, selfish, vain, and spoiled. On a dark and stormy night at sea, the merchant is robbed by pirates who sink most of his merchant fleet and force the entire family to live in a country house and work for a living. let me continue"];
const storyTwo = [" Beauty asks nothing but her father's safety, but when he insists on buying her a present, she is satisfied with the promise of a rose after none had grown last spring. However, to his dismay, the merchant finds that his ship's cargo has been seized to pay his debts, leaving him penniless and unable to buy his children's presents. On his way back, the merchant is caught in a terrible storm. Seeking shelter, he comes upon a mysterious palace. The merchant sneaks in, seeing that nobody is home, and finds tables laden with food and drinks which seem to have been left for him by the palace's invisible owner. The merchant accepts these gifts and spends the night. The next morning, the merchant sees the palace as his own possession and is about to leave when he sees a rose garden and recalls that Beauty had desired a rose. should i continue my dear"];
const storyThree = ["ok dear While Beauty makes a firm resolution to adjust to rural life with a cheerful disposition, her sisters do not and mistake her firmness for insensibility, forcing her into doing household work in an effort to make enough money to buy back their former home, a year later, the merchant hears from one of his crew members that one of the trade ships he had sent has arrived back in port, having escaped the destruction of its companions. Before leaving, he asks his children if they wish for him to bring any gifts back for them. The sons ask for weaponry and horses to hunt with, whereas the oldest daughters ask for clothing, jewels, and fine dresses, as they think his wealth has returned. should i still go ahead"];
const storyfour = ["ok so, the merchant quickly plucks the loveliest rose he can find, and is about to pluck more for a bouquet, but is confronted by a hideous Beast who warns him that theft of his property i.e., the rose is a charge punishable by death. Realizing his deadly mistake, the merchant begs for forgiveness, revealing that he had only picked the rose as a gift for his youngest daughter. After listening to his story, the Beast reluctantly agrees to let him give the rose to Beauty, but only if the merchant brings Beauty to him in exchange without deception; he makes it clear that Beauty must agree to take his place so he can treat her as his fiancée, and not his prisoner, while under no illusions about her predicament. Otherwise, the Beast will destroy his entire family. At first, the merchant is upset about Beauty being abducted into marrying him, but he reluctantly accepts. The Beast sends him on his way atop a magical horse along with wealth, jewels and fine clothes for his sons and daughters, but stresses that Beauty must never know about his deal. should i still go on"];
const storyFifth = [" ok,  The merchant, upon arriving home, tries to hide the secret from his children, but Beauty pries it from him on purpose. Reacting swiftly, the brothers suggest they could go to the castle and fight the Beast together while the older sisters place blame on Beauty for dooming the entire family. To release her father from the engagement, Beauty volunteers to go to the Beast willingly, and her father reluctantly allows her to go. Once she arrives at his palace, the Beast is excited to meet Beauty face to face, so he throws a welcome ceremony by treating her to an amazing cabaret. He gives her lavish clothing and food and carries on lengthy conversations with her in which she notes that he is inclined to stupidity rather than savagery. Every night, the Beast asks Beauty to sleep with him, only to be refused each time. hope your are enjoying the story dear?"];
const storySixth = ["After each refusal, Beauty dreams of dancing with a handsome prince. Suddenly, a fairy appears and pleads with Beauty to say why she keeps refusing him. She replies that she doesn't know how to love the Beast because she loves him only as a friend. Despite the apparition of the fairy urging her not to be deceived by appearances, she does not make the connection between a prince and a beast and becomes convinced that the Beast is holding the Prince captive somewhere in his castle. She searches and discovers many enchanted rooms ranging from libraries to aviaries to enchanted windows allowing her to attend the theater. She also finds live furniture and other live objects which act as servants, but never the Prince from her dreams. For a month, Beauty lives a life of luxury at the Beast's palace with no end to riches or amusements and an endless supply of exquisite finery to wear. Eventually, she becomes homesick and begs the Beast to allow her to go see her family again. He allows it on the condition that she returns in exactly two months. Beauty agrees to this and is presented with an enchanted ring which will take her back to the Beast when the two months are up. The rest of her family is surprised to find her well fed and dressed in finery. At first, her father advises Beauty to marry the Beast, but when Beauty refuses, her father and her brothers do all they can to detain her return to the Beast. However, Beauty is determined to honor the deal she made. the end hope you like it?"];
const apprct = ["thank you, i think i like you"];



//our response to the user
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {  
    activated.textContent= 'voice is activated, talk now';
};

recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    // ans.textContent = finalText;
    readOutLoud(transcript);
    // ans.textContent = readOutLoud(finalText);
    if (content.textContent == 'what can I eat for breakfast') {
        showFood.style.display = "block";
        showSummer.style.display = "none";
        showStory.style.display = "none";
    }
    
    if (content.textContent == "best place for vacation") {
        showSummer.style.display = "block";
        showFood.style.display = "none";
        showStory.style.display = "none";
    }
    
    if (content.textContent == "tell me a story") {
        showStory.style.display = "block";
        showFood.style.display = "none";
        showSummer.style.display = "none";
    }
    if (content.textContent == "yes") {
        showStory.style.display = "block";
    }
    if (content.textContent == "yes go on") {
        showStory.style.display = "block";
    }
    if (content.textContent == "yes please") {
        showStory.style.display = "block";
    }

}


//created listening something
let indexNo = 0;


//add event listener to the btn
start.addEventListener('click', () => {
    recognition.start();
     showStory.style.display = "none";
    showFood.style.display = "none";
    showSummer.style.display = "none";
});

    
function readOutLoud(massage) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "sorry dear i didn't here that, am always improving my hearing";
    
    if (massage.includes("hello")) {
        const finalText = welcome;
        speech.text = finalText;
    } else {
    }
    if (massage.includes("hello bumblebee")) {
        const finalText = welcome;
        speech.text = finalText;
    } else {
    }

    if (massage.includes("I am fine and you")) {
        const finalText = good;
        speech.text = finalText;
    } else {
    }
    if (massage.includes("I'm fine and you")) {
        const finalText = good;
        speech.text = finalText;
    } else {
    }
    if (massage.includes("how are you")) {
        const finalText = goodOne;
        speech.text = finalText;
    } else {
        
    }
   if (massage.includes("how is the weather like")) {
        const finalText = weather;
        speech.text = finalText;
    } else {
        
    }
   if (massage.includes("what is the weather in America")) {
        const finalText = weatherAmerica;
        speech.text = finalText;
    } else {
        
    }
   if (massage.includes("when is your birthday")) {
       const finalText = birthday;
        speech.text = finalText;
    } else {
       
    }
    if (massage.includes("when where you created")) {
        const finalText = created;
        speech.text = finalText;
    } else {
       
    }
    if (massage.includes("are you a human being")) {
        const finalText = human;
        speech.text = finalText;
    }
    if (massage.includes("do you eat food")) {
        const finalText = food;
        speech.text = finalText;
    } else {
      
    }
    if (massage.includes("do you like my voice")) {
        const finalText = voice;
        speech.text = finalText;
    } else {
       
    }
    if (massage.includes("what can I eat for breakfast")) {
        const finalText = suggestFood;
        speech.text = finalText;
    } else {
        
    }
    if (massage.includes("best place for vacation during summer")) {
        const finalText = vacation;
        speech.text = finalText;
    } else {
        
    }
    if (massage.includes("best place for vacation")) {
        const finalText = vacation;
        speech.text = finalText;
    } else {
        
    }
    if (massage.includes("where do i go for vacation")) {
        const finalText = vacation;
        speech.text = finalText;
    } else {
       
    }
    if (massage.includes("tell me a story")) {
        const finalText = story;
        speech.text = finalText;
    }
    if (massage.includes("yes")) {
        const finalText = storyTwo;
        speech.text = finalText;
    }
    if (massage.includes("yes please")) {
        const finalText = storyThree;
        speech.text = finalText;
    }
    if (massage.includes(" yes go on")) {
        const finalText = storyfour;
        speech.text = finalText;
    }
    if (massage.includes(" yes please finish it")) {
        const finalText = storyFifth;
        speech.text = finalText;
    }
    if (massage.includes("yes dear")) {
        const finalText = storySixth;
        speech.text = finalText;
    }
    if (massage.includes("yes very much thank you")) {
        const finalText = apprct;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};