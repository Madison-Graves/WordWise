
const anxiety = [{_theme:'Anxiety',
                    _verse: 'Matthew 6:34',
                    _qoute: 'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.',
                    _meaning: 'to focus on the present and trust that God will provide for each day, rather than being overwhelmed by future worries.'
                },
                {_theme: 'Anxiety',
                    _verse: '1 Peter 5:7',
                    _qoute: 'Cast all your anxiety on him because he cares for you.',
                    _meaning: 'to bring our worries to God, knowing that He cares deeply for us and is ready to take our burdens.'
                },
                {_theme:'Anxiety',
                    _verse:'Isaiah 41:10',
                    _qoute:'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
                    _meaning: 'that we don’t have to fear or be anxious, because God is always with us, ready to strengthen and support us through any situation.'
                }];




const forgiveness = [{_theme:'forgiveness',
                        _verse: 'Colossians 3:13',
                        _qoute: 'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.',
                        _meaning: 'to extend the same grace and forgiveness to others that God has shown to us.'
                    },
                    {_theme:'forgiveness',
                        _verse: 'Matthew 18:21-22',
                        _qoute: "Then Peter came to Jesus and asked, ‘Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?’ Jesus answered, ‘I tell you, not seven times, but seventy-seven times.",
                        _meaning: "how Jesus teaches that forgiveness should be limitless, just as God's forgiveness for us is without end."
                    },
                    {_theme:'forgiveness',
                        _verse: "Ephesians 4:32",
                        _qoute: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
                        _meaning: "that forgiveness should come from a heart of compassion and kindness, reflecting God's forgiveness toward us through Christ."
                    }];



const encouragement = [{_theme: 'encouragement',
                        _verse: 'Isaiah 41:10',
                        _qoute: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
                        _meaning: "that God is always with us, offering strength and support, no matter what we're going through."
                    },{_theme: 'encouragement',
                        _verse: 'Romans 8:28',
                        _qoute: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
                        _meaning: "us that God is working for our good in every situation, even when we can’t see the full picture."
                    },{_theme:'encouragement',
                        _verse: 'Philippians 4:13',
                        _qoute: "I can do all this through him who gives me strength.",
                        _meaning: "us to trust in God's strength, knowing that with His help, we can face any challenge that comes our way."
                    }];


const themeArray = [anxiety, forgiveness, encouragement]


const randomMessage = () => {
    let theme = themeArray[Math.floor(Math.random() * themeArray.length)];
    let randomObj = theme[Math.floor(Math.random() * theme.length)];

    if(randomObj){
        return `💗 Today's Focus is ${randomObj._theme} 💗<br><br>📖 ${randomObj._verse.toUpperCase()} Says:<br>"${randomObj._qoute}"<br><br>💡 Reflection 💡<br>This verse reminds us ${randomObj._meaning} `;
    }
    
    
};

console.log(randomMessage());
 
let myMessage = document.getElementById('message');
let instruction = document.getElementById('how-to');
let button = document.getElementById('button');
let newInstruct = document.getElementById('after-press');
newInstruct.hidden = true;
console.log(myMessage);
console.log(instruction);
console.log(button);

button.onclick = () => {
    myMessage.style.textAlign = 'center';
    myMessage.innerHTML = randomMessage();
    newInstruct.hidden = false;
};
