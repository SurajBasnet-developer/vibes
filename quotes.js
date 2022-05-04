const localQuotes = [
    {
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
      author: 'Thomas Edison',
    },
    {
      text: 'You can observe a lot just by watching.',
      author: 'Yogi Berra',
    },
    {
      text: 'A house divided against itself cannot stand.',
      author: 'Abraham Lincoln',
    },
    {
      text: 'Difficulties increase the nearer we get to the goal.',
      author: 'Johann Wolfgang von Goethe',
    },
    {
      text: 'Fate is in your hands and no one elses',
      author: 'Byron Pulsifer',
    },
    {
      text: 'Be the chief but never the lord.',
      author: 'Lao Tzu',
    },
    {
      text: 'Nothing happens unless first we dream.',
      author: 'Carl Sandburg',
    },
    {
      text: 'Well begun is half done.',
      author: 'Aristotle',
    },
    {
      text: 'Life is a learning experience, only if you learn.',
      author: 'Yogi Berra',
    },
    {
      text: 'Self-complacency is fatal to progress.',
      author: 'Margaret Sangster',
    },
    {
      text: 'Peace comes from within. Do not seek it without.',
      author: 'Buddha',
    },
    {
      text: 'What you give is what you get.',
      author: 'Byron Pulsifer',
    },
    {
      text: 'We can only learn to love by loving.',
      author: 'Iris Murdoch',
    },
    {
      text: 'Life is change. Growth is optional. Choose wisely.',
      author: 'Karen Clark',
    },
    {
      text: "You'll see it when you believe it.",
      author: 'Wayne Dyer',
    },
    {
      text: 'Today is the tomorrow we worried about yesterday.',
      author: null,
    },
    {
      text: "It's easier to see the mistakes on someone else's paper.",
      author: null,
    },
    {
      text: 'Every man dies. Not every man really lives.',
      author: null,
    },
    {
      text: 'To lead people walk behind them.',
      author: 'Lao Tzu',
    },
    {
      text: 'Having nothing, nothing can he lose.',
      author: 'William Shakespeare',
    },
    {
      text: 'Trouble is only opportunity in work clothes.',
      author: 'Henry J. Kaiser',
    },
    {
      text: 'A rolling stone gathers no moss.',
      author: 'Publilius Syrus',
    },
    {
      text: 'Ideas are the beginning points of all fortunes.',
      author: 'Napoleon Hill',
    },
    {
      text: 'Everything in life is luck.',
      author: 'Donald Trump',
    },
    {
      text: 'Doing nothing is better than being busy doing nothing.',
      author: 'Lao Tzu',
    },
    {
      text: 'Trust yourself. You know more than you think you do.',
      author: 'Benjamin Spock',
    },
    {
      text: 'Study the past, if you would divine the future.',
      author: 'Confucius',
    },
    {
      text: 'The day is already blessed, find peace within it.',
      author: null,
    },
    {
      text: 'From error to error one discovers the entire truth.',
      author: 'Sigmund Freud',
    },
    {
      text: 'Well done is better than well said.',
      author: 'Benjamin Franklin',
    },
    {
      text: 'Bite off more than you can chew, then chew it.',
      author: 'Ella Williams',
    },
    {
      text: 'Work out your own salvation. Do not depend on others.',
      author: 'Buddha',
    },
    {
      text: 'One today is worth two tomorrows.',
      author: 'Benjamin Franklin',
    },
    {
      text: 'Once you choose hope, anythings possible.',
      author: 'Christopher Reeve',
    },
    {
      text: 'God always takes the simplest way.',
      author: 'Albert Einstein',
    },
    {
      text: 'One fails forward toward success.',
      author: 'Charles Kettering',
    },
    {
      text: 'From small beginnings come great things.',
      author: null,
    },
    {
      text: 'Learning is a treasure that will follow its owner everywhere',
      author: 'Chinese proverb',
    },
    {
      text: 'Be as you wish to seem.',
      author: 'Socrates',
    },
    {
      text: 'The world is always in movement.',
      author: 'V. Naipaul',
    },
    {
      text: 'Never mistake activity for achievement.',
      author: 'John Wooden',
    },
    {
      text: 'What worries you masters you.',
      author: 'Haddon Robinson',
    },
    {
      text: 'One faces the future with ones past.',
      author: 'Pearl Buck',
    },
    {
      text: 'Goals are the fuel in the furnace of achievement.',
      author: 'Brian Tracy',
    },
    {
      text: 'Who sows virtue reaps honour.',
      author: 'Leonardo da Vinci',
    },
    {
      text: 'Be kind whenever possible. It is always possible.',
      author: 'Dalai Lama',
    },
    {
      text: "Talk doesn't cook rice.",
      author: 'Chinese proverb',
    },
    {
      text: 'He is able who thinks he is able.',
      author: 'Buddha',
    },
    {
      text: 'A goal without a plan is just a wish.',
      author: 'Larry Elder',
    },
    {
      text: 'To succeed, we must first believe that we can.',
      author: 'Michael Korda',
    },
    {
      text: 'Learn from yesterday, live for today, hope for tomorrow.',
      author: 'Albert Einstein',
    },
    {
      text: 'A weed is no more than a flower in disguise.',
      author: 'James Lowell',
    },
    {
      text: 'Do, or do not. There is no try.',
      author: 'Yoda',
    },
    {
      text: 'All serious daring starts from within.',
      author: 'Harriet Beecher Stowe',
    },
    {
      text: 'The best teacher is experience learned from failures.',
      author: 'Byron Pulsifer',
    },
    {
      text: 'Think how hard physics would be if particles could think.',
      author: 'Murray Gell-Mann',
    },
    {
      text: "Love is the flower you've got to let grow.",
      author: 'John Lennon',
    },
    {
      text: "Don't wait. The time will never be just right.",
      author: 'Napoleon Hill',
    },
    {
      text: 'Time is the wisest counsellor of all.',
      author: 'Pericles',
    },
    {
      text: 'You give before you get.',
      author: 'Napoleon Hill',
    },
    {
      text: 'Wisdom begins in wonder.',
      author: 'Socrates',
    },
    {
      text: 'Without courage, wisdom bears no fruit.',
      author: 'Baltasar Gracian',
    },
    {
      text: 'Change in all things is sweet.',
      author: 'Aristotle',
    },
    {
      text: 'What you fear is that which requires action to overcome.',
      author: 'Byron Pulsifer',
    },
    {
      text: 'When performance exceeds ambition, the overlap is called success.',
      author: 'Cullen Hightower',
    },
    {
      text: 'When deeds speak, words are nothing.',
      author: 'African proverb',
    },
    {
      text: 'Real magic in relationships means an absence of judgement of others.',
      author: 'Wayne Dyer',
    },
    {
      text: 'I never think of the future. It comes soon enough.',
      author: 'Albert Einstein',
    },
    {
      text: 'Skill to do comes of doing.',
      author: 'Ralph Emerson',
    },
    {
      text: 'Wisdom is the supreme part of happiness.',
      author: 'Sophocles',
    },
    {
      text: 'I believe that every person is born with talent.',
      author: 'Maya Angelou',
    },
    {
      text: 'Important principles may, and must, be inflexible.',
      author: 'Abraham Lincoln',
    },
    {
      text: 'The undertaking of a new action brings new strength.',
      author: 'Richard Evans',
    },
    {
      text: 'The years teach much which the days never know.',
      author: 'Ralph Emerson',
    },
    {
      text: 'Our distrust is very expensive.',
      author: 'Ralph Emerson',
    },
    {
      text: 'All know the way; few actually walk it.',
      author: 'Bodhidharma',
    },
    {
      text: 'Great talent finds happiness in execution.',
      author: 'Johann Wolfgang von Goethe',
    },
    {
      text: 'Faith in oneself is the best and safest course.',
      author: 'Michelangelo',
    },
    {
      text: 'Courage is going from failure to failure without losing enthusiasm.',
      author: 'Winston Churchill',
    },
    {
      text: 'The two most powerful warriors are patience and time.',
      author: 'Leo Tolstoy',
    },
    {
      text: 'Anticipate the difficult by managing the easy.',
      author: 'Lao Tzu',
    },
    {
      text: 'Those who are free of resentful thoughts surely find peace.',
      author: 'Buddha',
    },
    {
      text: 'A short saying often contains much wisdom.',
      author: 'Sophocles',
    },
    {
      text: 'It takes both sunshine and rain to make a rainbow.',
      author: null,
    },
    {
      text: 'A beautiful thing is never perfect.',
      author: null,
    },
    {
      text: 'Only do what your heart tells you.',
      author: 'Princess Diana',
    },
    {
      text: 'Life is movement-we breathe, we eat, we walk, we move!',
      author: 'John Pierrakos',
    },
    {
      text: 'No one can make you feel inferior without your consent.',
      author: 'Eleanor Roosevelt',
    },
    {
      text: 'Argue for your limitations, and sure enough theyre yours.',
      author: 'Richard Bach',
    },
    {
      text: 'Luck is what happens when preparation meets opportunity.',
      author: 'Seneca',
    },
    {
      text: 'Victory belongs to the most persevering.',
      author: 'Napoleon Bonaparte',
    },
    {
      text: 'Love all, trust a few, do wrong to none.',
      author: 'William Shakespeare',
    },
    {
      text: 'In order to win, you must expect to win.',
      author: 'Richard Bach',
    },
    {
      text: 'A goal is a dream with a deadline.',
      author: 'Napoleon Hill',
    },
    {
      text: 'You can do it if you believe you can!',
      author: 'Napoleon Hill',
    },
    {
      text: "Set your goals high, and don't stop till you get there.",
      author: 'Bo Jackson',
    },
    {
      text: 'Every new day is another chance to change your life.',
      author: null,
    },
    {
      text: 'Smile, breathe, and go slowly.',
      author: 'Thich Nhat Hanh',
    },
    {
      text: 'Nobody will believe in you unless you believe in yourself.',
      author: 'Liberace',
    },
    {
      text: 'Do more than dream: work.',
      author: 'William Arthur Ward',
    },
    {
      text: 'No man was ever wise by chance.',
      author: 'Seneca',
    },
    {
      text: 'Some pursue happiness, others create it.',
      author: null,
    },
    {
      text: 'He that is giddy thinks the world turns round.',
      author: 'William Shakespeare',
    },
    {
      text: "Don't ruin the present with the ruined past.",
      author: 'Ellen Gilchrist',
    },
    {
      text: 'Do something wonderful, people may imitate it.',
      author: 'Albert Schweitzer',
    },
    {
      text: 'We do what we do because we believe.',
      author: null,
    },
    {
      text: 'Do one thing every day that scares you.',
      author: 'Eleanor Roosevelt',
    },
    {
      text: 'If you cannot be silent be brilliant and thoughtful.',
      author: 'Byron Pulsifer',
    },
    {
      text: 'Who looks outside, dreams; who looks inside, awakes.',
      author: 'Carl Jung',
    },
    {
      text: 'What we think, we become.',
      author: 'Buddha',
    },
    {
      text: 'The shortest answer is doing.',
      author: 'Lord Herbert',
    },
    {
      text: 'All our knowledge has its origins in our perceptions.',
      author: 'Leonardo da Vinci',
    },
    {
      text: 'The harder you fall, the higher you bounce.',
      author: null,
    },
    {
      text: 'Trusting our intuition often saves us from disaster.',
      author: 'Anne Wilson Schaef',
    },
    {
      text: 'Truth is powerful and it prevails.',
      author: 'Sojourner Truth',
    },
    {
      text: 'Light tomorrow with today!',
      author: 'Elizabeth Browning',
    },
    {
      text: 'Silence is a fence around wisdom.',
      author: 'German proverb',
    },
    {
      text: 'Society develops wit, but its contemplation alone forms genius.',
      author: 'Madame de Stael',
    },
    {
      text: 'The simplest things are often the truest.',
      author: 'Richard Bach',
    },
    {
      text: 'Everyone smiles in the same language.',
      author: null,
    },
    {
      text: 'Yesterday I dared to struggle. Today I dare to win.',
      author: 'Bernadette Devlin',
    },
    {
      text: 'No alibi will save you from accepting the responsibility.',
      author: 'Napoleon Hill',
    },
    {
      text: 'If you can dream it, you can do it.',
      author: 'Walt Disney',
    },
    {
      text: 'It is better to travel well than to arrive.',
      author: 'Buddha',
    },
    {
      text: "Life shrinks or expands in proportion to one's courage.",
      author: 'Anais Nin',
    },
    {
      text: 'You have to believe in yourself.',
      author: 'Sun Tzu',
    },
    {
      text: 'Our intention creates our reality.',
      author: 'Wayne Dyer',
    },
    {
      text: 'Silence is a true friend who never betrays.',
      author: 'Confucius',
    },
    {
      text: 'Character develops itself in the stream of life.',
      author: 'Johann Wolfgang von Goethe',
    },
    {
      text: 'From little acorns mighty oaks do grow.',
      author: 'American proverb',
    },
    {
      text: "You can't stop the waves, but you can learn to surf.",
      author: 'Jon Kabat-Zinn',
    },
    {
      text: 'Reality does not conform to the ideal, but confirms it.',
      author: 'Gustave Flaubert',
    },
    {
      text: 'Speak low, if you speak love.',
      author: 'William Shakespeare',
    },
    {
      text: 'A really great talent finds its happiness in execution.',
      author: 'Johann Wolfgang von Goethe',
    },
    {
      text: 'Reality leaves a lot to the imagination.',
      author: 'John Lennon',
    },
    {
      text: 'The greatest remedy for anger is delay.',
      author: 'Seneca',
    },
    {
      text: 'Growth itself contains the germ of happiness.',
      author: 'Pearl Buck',
    },
    {
      text: "You can do what's reasonable or you can decide what's possible.",
      author: 'Unknown',
    },
    
    {
        text: "जीवन भनेको त्यही हो जब तपाईं अन्य योजनाहरू बनाउन व्यस्त हुनुहुन्छ ।",
        author: "जन लेनन"
    },
    {
        text: "सधैं सम्झनुहोस् कि तपाईं बिल्कुल अनौंठो हुनुहुन्छ । अरुहरु जस्तै ।",
        author: "मार्गरेट मीड"
    },
    {
        text: "भविष्य तिनीहरूकै हो जसले आफना सपनाहरूको सुन्दरतामा विश्वास गर्छन् ।",
        author: "Eleanor Roosevelt"
    },
    {
        text: "जो खुशी छ, उसले अरूलाई पनि खुशी बनाउँछ ।",
        author: "Anne Frank"
    },
    {
        text: "तपाईले जीवनमा धेरै पराजयहरूको सामना गर्नुपर्नेछ, तर आफैंलाई कहिल्यै पराजित हुन नदिनुहोस् ।",
        author: "माया एन्जेल"
    },
    {
        text: "कहिलेकाहीँ प्रश्नहरू जटिल हुन्छन् तर उत्तरहरु भने सरल हुन्छन् ।",
        author: "Dr. Seuss"
    },
    {
        text: "आज तपाईं तपाईं हो, यो सत्यभन्दा बढी सत्य छ । कुनै पनि जिउँदो छैन जुन तपाईं भन्दा अधिक छ ।",
        author: "Dr. Seuss"
    },
    {
        text: "कहिले पनि डरलाग्दो डरहरुले तपाईंलाई खेल खेल्नबाट रोक्न नदिनुहोस् ।",
        author: "बेब रूथ"
    },
    {
        text: "जीवनका धेरै असफलता भोग्ने ती व्यक्तिहरु हुन् जसल यो महसुस गरेनन् कि मैले छोडेको असफलताको ठाउँ सफलताको नजिक थियो ।",
        author: "थाँमस ए एडिसन"
    },
    {
        text: "तपाईको टाउकोमा दिमाग छ । तपाईको खुट्टामा जुत्ता छ । तपाई आफैंले रोज्नु भएको कुनै दिशा पछ्याउन सक्नुहुन्छ ।",
        author: "Dr. Seuss"
    },
    {
        text: "यस जीवनमा हामी ठूला कामहरू गर्न सक्दैनौं । हामी केवल ठूलो प्रेमको साथ साना कुराहरु गर्न सक्छौं ।",
        author: "मदर टेरेसा"
    },
    {
        text: "केवल अरूको लागि बाँचिएको जीवन नै र्सार्थक जीवन हो ।",
        author: "अल्बर्ट आइनस्टाइन"
    },
    {
        text: "तिमी एकपटक मात्रै बाँच्छौ तर सहीसँग बाँचेमा एक पटक नै पर्याप्त हुन्छ ।",
        author: "Mae West"
    },
    {
        text: "जीवन वास्तवमा सरल छ, तर हामी यसलाई जटिल बनाउनमा जोड दिन्छौं ।",
        author: "कन्फुसियस"
    },
    {
        text: "जीवन आफैंमा सबभन्दा अद्भुत परी कथा हो ।",
        author: "हान्स क्रिश्चियन एन्डरसन"
    },
    {
        text: "जीवन हाम्रो जीवन बिताउनको लागी हो, मुक्तिको लागि होइन ।",
        author: "एम् एच लरेन्स"
    },
    {
        text: "जीवन साइकल चलाउने जस्तै हो । तपाईंलाई ब्यालेन्स राख्नको लागि, तपाई सधैँ चलाइराख्नर्ुपर्छ।",
        author: "अल्बर्ट आइनस्टाइन"
    },
    {
        text: "हाँस्नुहोस्, किनकि सुन्दर जीवन एक सुन्दर चीज हो र यसैमा मुस्कुराउन काफी छ ।",
        author: "मारलिन मुनरो"
    },
    {
        text: "सफलता अन्तिम होइन, असफलता घातक होइन, यो त हिसाब हो, गणना जारी छ ।",
        author: "विन्स्टन एस चर्चिल"
    },
    {
        text: "सफलता सामान्यतया ती मानिसहरुमा आउँदछ जो यसको लागि व्यस्त छन् ।",
        author: "हेनरी डेविड थोरो"
    },
    {
        text: "दुःखको भूलभुलैयाबाट बाहिर जाने एउटा मात्र सही तरिका क्षमा गर्नु हो ।",
        author: "John Green"
    },
    {
        text: "यदि तपाईं साँच्चिकै नजिकबाट हेर्नुभयो भने, धेरैजसो सफलताहरू धेरै समय लिन्छ ।",
        author: "Steve Jobs"
    },
    {
        text: "मृत्युको डरले जीवनको डरलाई पछयाउँछ । एक व्यक्ति पण्ारुपले जिउँछ जो कुनै पनि समयमा मर्न तयार छ ।",
        author: "Mark Twain"
    },
    {
        text: "जसलाई तपाईंले प्रेम गर्नुहुन्छ, र जसले तपाईंलाई प्रेम गर्दछ, त्यो कोही होइन, उही व्यक्ति हो ।",
        author: "Chuck Palahniuk"
    },
    {
        text: "हामी सबै मानव जाति हौं, होइन र – हरेक मानव जीवनसँग उही मुल्य हुन्छ, र उही मूल्य बचत हुन्छ ।",
        author: "J.K. Rowling"
    },
    {
        text: "अहिलेको जीवनको सबैभन्दा दुःखद पक्ष भनेको विज्ञानले ज्ञानभन्दा बढी जानकारी सङ्कलन गरिरहेको छ ।",
        author: "Isaac Asimov"
    },
    {
        text: "यो जीवन कठिन छ, तर यो झन गाह्रो छ यदि तपाईं मूर्ख हुनुहुन्छ भने ।",
        author: "George V. Higgins"
    },
    {
        text: "जहाँ त्यहाँ प्रेम छ, त्यहाँ जीवन छ ।",
        author: "Mahatma Gandhi"
    },
    {
        text: "जो आफ्नो अर्थले जीवन बिताउँछ, ऊ कल्पनाको कमीबाट ग्रस्त हुन्छ।",
        author: "Oscar Wilde"
    },
    {
        text: "जीवन एउटा कहिल्यै नसकिने समाप्त नहुने वसन्त हो ।",
        author: "वी.पी.कोइराला"
    },
    {
        text: "मान्छे न त पशु हो, न इश्वर नै बन्न सक्छ, मान्छे केवल मानिस हो, पशुदेखि, माथि र इश्वरदेखि तल ।",
        author: "वी.पी.कोइराला"
    },
    {
        text: "मानिस इतिहासको संयन्त्र होइन र उसको खोज भोजनको लागि मात्र हुँदैनस मानिस एक बहुआयामिक व्यक्तित्व हो ।",
        author: "वी.पी.कोइराला"
    },
];