export const languages = [
  { code: "ta", name: "Tamil",   flag: "🇮🇳", color: "#e74c3c" },
  { code: "hi", name: "Hindi",   flag: "🇮🇳", color: "#f39c12" },
  { code: "fr", name: "French",  flag: "🇫🇷", color: "#3498db" },
  { code: "ja", name: "Japanese",flag: "🇯🇵", color: "#e91e63" },
  { code: "es", name: "Spanish", flag: "🇪🇸", color: "#2ecc71" },
  { code: "de", name: "German",  flag: "🇩🇪", color: "#9b59b6" },
];

export const lessons = {
  ta: {
    vocabulary: [
      { word: "வணக்கம்",   translation: "Hello",        pronunciation: "Vanakkam",    example: "வணக்கம், நான் ரவி" },
      { word: "நன்றி",     translation: "Thank you",    pronunciation: "Nandri",      example: "உதவிக்கு நன்றி" },
      { word: "ஆம்",       translation: "Yes",          pronunciation: "Aam",         example: "ஆம், சரி" },
      { word: "இல்லை",    translation: "No",           pronunciation: "Illai",       example: "இல்லை, தேவையில்லை" },
      { word: "தண்ணீர்",  translation: "Water",        pronunciation: "Thanneer",    example: "தண்ணீர் தாருங்கள்" },
      { word: "உணவு",     translation: "Food",         pronunciation: "Unavu",       example: "உணவு சாப்பிட வேண்டும்" },
      { word: "வீடு",     translation: "House",        pronunciation: "Veedu",       example: "என் வீடு பெரியது" },
      { word: "பள்ளி",    translation: "School",       pronunciation: "Palli",       example: "பள்ளி நாளை திறக்கும்" },
    ],
    phrases: [
      { word: "நான் உங்களை நேசிக்கிறேன்", translation: "I love you",         pronunciation: "Naan ungalai nesikiren" },
      { word: "எப்படி இருக்கீங்க?",        translation: "How are you?",       pronunciation: "Eppadi irukkinga?" },
      { word: "என் பெயர் ___",             translation: "My name is ___",     pronunciation: "En peyar ___" },
      { word: "மன்னிக்கவும்",              translation: "Sorry / Excuse me",  pronunciation: "Mannikkavum" },
    ],
    grammar: [
      { word: "நான்",   translation: "I (First person)",    pronunciation: "Naan",   example: "நான் படிக்கிறேன்" },
      { word: "நீங்கள்",translation: "You (Formal)",        pronunciation: "Neengal",example: "நீங்கள் நல்லவர்" },
      { word: "அவர்",   translation: "He/She (Respectful)", pronunciation: "Avar",   example: "அவர் ஆசிரியர்" },
    ],
  },

  hi: {
    vocabulary: [
      { word: "नमस्ते",    translation: "Hello",       pronunciation: "Namaste",     example: "नमस्ते, मैं राज हूँ" },
      { word: "धन्यवाद",  translation: "Thank you",   pronunciation: "Dhanyavaad",  example: "मदद के लिए धन्यवाद" },
      { word: "हाँ",      translation: "Yes",          pronunciation: "Haan",        example: "हाँ, ठीक है" },
      { word: "नहीं",     translation: "No",           pronunciation: "Nahin",       example: "नहीं, जरूरत नहीं" },
      { word: "पानी",     translation: "Water",        pronunciation: "Paani",       example: "पानी पीना है" },
      { word: "खाना",     translation: "Food",         pronunciation: "Khaana",      example: "खाना बहुत अच्छा है" },
      { word: "घर",       translation: "House",        pronunciation: "Ghar",        example: "मेरा घर बड़ा है" },
      { word: "स्कूल",   translation: "School",       pronunciation: "School",      example: "स्कूल कल बंद है" },
    ],
    phrases: [
      { word: "मैं तुमसे प्यार करता हूँ", translation: "I love you",     pronunciation: "Main tumse pyaar karta hoon" },
      { word: "आप कैसे हैं?",              translation: "How are you?",   pronunciation: "Aap kaise hain?" },
      { word: "मेरा नाम ___ है",           translation: "My name is ___", pronunciation: "Mera naam ___ hai" },
      { word: "माफ़ करना",                 translation: "Sorry",          pronunciation: "Maaf karna" },
    ],
    grammar: [
      { word: "मैं",   translation: "I",   pronunciation: "Main", example: "मैं पढ़ता हूँ" },
      { word: "तुम",  translation: "You",  pronunciation: "Tum",  example: "तुम अच्छे हो" },
      { word: "वह",   translation: "He/She",pronunciation: "Vah", example: "वह शिक्षक है" },
    ],
  },

  fr: {
    vocabulary: [
      { word: "Bonjour",  translation: "Hello",      pronunciation: "bon-ZHOOR",  example: "Bonjour, je suis Paul" },
      { word: "Merci",    translation: "Thank you",  pronunciation: "MEHR-see",   example: "Merci beaucoup" },
      { word: "Oui",      translation: "Yes",        pronunciation: "wee",        example: "Oui, c'est correct" },
      { word: "Non",      translation: "No",         pronunciation: "noh",        example: "Non, merci" },
      { word: "Eau",      translation: "Water",      pronunciation: "oh",         example: "Je veux de l'eau" },
      { word: "Nourriture",translation:"Food",       pronunciation: "noo-ree-TOOR",example: "La nourriture est bonne" },
      { word: "Maison",   translation: "House",      pronunciation: "meh-ZOH",    example: "Ma maison est grande" },
      { word: "École",    translation: "School",     pronunciation: "ay-KOL",     example: "L'école est fermée" },
    ],
    phrases: [
      { word: "Je t'aime",          translation: "I love you",     pronunciation: "zhuh TEM" },
      { word: "Comment allez-vous?",translation: "How are you?",   pronunciation: "koh-MAH tah-lay VOO" },
      { word: "Je m'appelle ___",   translation: "My name is ___", pronunciation: "zhuh mah-PEL" },
      { word: "Excusez-moi",        translation: "Excuse me",      pronunciation: "ex-kew-ZAY mwah" },
    ],
    grammar: [
      { word: "Je",   translation: "I",   pronunciation: "zhuh", example: "Je parle français" },
      { word: "Tu",   translation: "You", pronunciation: "tew",  example: "Tu es gentil" },
      { word: "Il/Elle",translation:"He/She",pronunciation:"eel/el",example:"Il est professeur" },
    ],
  },

  ja: {
    vocabulary: [
      { word: "こんにちは", translation: "Hello",      pronunciation: "Konnichiwa",  example: "こんにちは、田中です" },
      { word: "ありがとう", translation: "Thank you",  pronunciation: "Arigatou",    example: "ありがとうございます" },
      { word: "はい",      translation: "Yes",         pronunciation: "Hai",         example: "はい、わかりました" },
      { word: "いいえ",    translation: "No",          pronunciation: "Iie",         example: "いいえ、けっこうです" },
      { word: "みず",      translation: "Water",       pronunciation: "Mizu",        example: "みずをください" },
      { word: "たべもの",  translation: "Food",        pronunciation: "Tabemono",    example: "たべものがおいしい" },
      { word: "いえ",      translation: "House",       pronunciation: "Ie",          example: "わたしのいえはおおきい" },
      { word: "がっこう",  translation: "School",      pronunciation: "Gakkou",      example: "がっこうはたのしい" },
    ],
    phrases: [
      { word: "あいしてる",           translation: "I love you",     pronunciation: "Aishiteru" },
      { word: "おげんきですか？",     translation: "How are you?",   pronunciation: "Ogenki desu ka?" },
      { word: "わたしの なまえは___", translation: "My name is ___", pronunciation: "Watashi no namae wa ___" },
      { word: "すみません",           translation: "Excuse me",      pronunciation: "Sumimasen" },
    ],
    grammar: [
      { word: "わたし", translation: "I",    pronunciation: "Watashi", example: "わたしはがくせいです" },
      { word: "あなた", translation: "You",  pronunciation: "Anata",   example: "あなたはやさしい" },
      { word: "かれ",   translation: "He",   pronunciation: "Kare",    example: "かれはせんせいです" },
    ],
  },

  es: {
    vocabulary: [
      { word: "Hola",    translation: "Hello",      pronunciation: "OH-lah",      example: "Hola, me llamo Carlos" },
      { word: "Gracias", translation: "Thank you",  pronunciation: "GRAH-syahs",  example: "Muchas gracias" },
      { word: "Sí",      translation: "Yes",        pronunciation: "see",         example: "Sí, está bien" },
      { word: "No",      translation: "No",         pronunciation: "noh",         example: "No, gracias" },
      { word: "Agua",    translation: "Water",      pronunciation: "AH-gwah",     example: "Quiero agua" },
      { word: "Comida",  translation: "Food",       pronunciation: "koh-MEE-dah", example: "La comida es deliciosa" },
      { word: "Casa",    translation: "House",      pronunciation: "KAH-sah",     example: "Mi casa es grande" },
      { word: "Escuela", translation: "School",     pronunciation: "ehs-KWEH-lah",example: "La escuela está cerrada" },
    ],
    phrases: [
      { word: "Te quiero",          translation: "I love you",     pronunciation: "teh KYEH-roh" },
      { word: "¿Cómo estás?",       translation: "How are you?",   pronunciation: "KOH-moh ehs-TAHS" },
      { word: "Me llamo ___",       translation: "My name is ___", pronunciation: "meh YAH-moh" },
      { word: "Perdón",             translation: "Sorry",          pronunciation: "pehr-DOHN" },
    ],
    grammar: [
      { word: "Yo",      translation: "I",    pronunciation: "yoh",      example: "Yo hablo español" },
      { word: "Tú",      translation: "You",  pronunciation: "too",      example: "Tú eres amable" },
      { word: "Él/Ella", translation: "He/She",pronunciation: "el/EH-yah",example: "Él es profesor" },
    ],
  },

  de: {
    vocabulary: [
      { word: "Hallo",   translation: "Hello",      pronunciation: "HAH-loh",    example: "Hallo, ich bin Max" },
      { word: "Danke",   translation: "Thank you",  pronunciation: "DAHN-keh",   example: "Vielen Dank" },
      { word: "Ja",      translation: "Yes",        pronunciation: "yah",        example: "Ja, das stimmt" },
      { word: "Nein",    translation: "No",         pronunciation: "nine",       example: "Nein, danke" },
      { word: "Wasser",  translation: "Water",      pronunciation: "VAH-ser",    example: "Ich möchte Wasser" },
      { word: "Essen",   translation: "Food",       pronunciation: "EH-sen",     example: "Das Essen ist gut" },
      { word: "Haus",    translation: "House",      pronunciation: "hows",       example: "Mein Haus ist groß" },
      { word: "Schule",  translation: "School",     pronunciation: "SHOO-leh",   example: "Die Schule ist geschlossen" },
    ],
    phrases: [
      { word: "Ich liebe dich",     translation: "I love you",     pronunciation: "ikh LEE-beh dikh" },
      { word: "Wie geht es Ihnen?", translation: "How are you?",   pronunciation: "vee gayt ehs EE-nen" },
      { word: "Ich heiße ___",      translation: "My name is ___", pronunciation: "ikh HY-seh" },
      { word: "Entschuldigung",     translation: "Excuse me",      pronunciation: "ent-SHUL-di-goong" },
    ],
    grammar: [
      { word: "Ich",  translation: "I",    pronunciation: "ikh",  example: "Ich lerne Deutsch" },
      { word: "Du",   translation: "You",  pronunciation: "doo",  example: "Du bist nett" },
      { word: "Er/Sie",translation:"He/She",pronunciation:"ehr/zee",example:"Er ist Lehrer" },
    ],
  },
};