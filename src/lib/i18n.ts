import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      dashboard: 'Dashboard',
      social: 'Social',
      trade: 'Trade',
      insight: 'Insight',
      devices: 'Devices',
      control: 'Control',
      learn: 'Learn',
      profile: 'Profile',
      waterQuality: 'Water Quality',
      temperature: 'Temperature',
      pH: 'pH Level',
      tds: 'TDS',
      turbidity: 'Turbidity',
      location: 'Location',
      signIn: 'Sign In',
      signOut: 'Sign Out',
      weather: 'Weather',
      humidity: 'Humidity',
      windSpeed: 'Wind Speed',
      partlyCloudy: 'Partly Cloudy',
      active: 'Active',
      soilType: 'Soil Type',
      organicMatter: 'Organic Matter',
      nitrogen: 'Nitrogen (N)',
      phosphorus: 'Phosphorus (P)',
      mainField: 'Main Field',
      newPlot: 'New Plot',
      areaSoilProfile: 'Area Soil Profile',
      aiRecommendations: 'AI Recommendations',
      irrigationTime: 'Optimal time for wheat irrigation',
      irrigationDesc: 'Based on soil moisture levels and weather forecast',
      marketAlert: 'Market price alert',
      marketDesc: 'Wheat prices expected to rise by 5% next week',
      overview: 'Here\'s your farming overview for today',
    },
  },
  hi: {
    translation: {
      welcome: 'स्वागत है',
      dashboard: 'डैशबोर्ड',
      social: 'सामाजिक',
      trade: 'व्यापार',
      insight: 'अंतर्दृष्टि',
      devices: 'उपकरण',
      control: 'नियंत्रण',
      learn: 'सीखें',
      profile: 'प्रोफ़ाइल',
      waterQuality: 'पानी की गुणवत्ता',
      temperature: 'तापमान',
      pH: 'पीएच स्तर',
      tds: 'टीडीएस',
      turbidity: 'मैलापन',
      location: 'स्थान',
      signIn: 'साइन इन करें',
      signOut: 'साइन आउट करें',
      weather: 'मौसम',
      humidity: 'नमी',
      windSpeed: 'हवा की गति',
      partlyCloudy: 'आंशिक रूप से बादल',
      active: 'सक्रिय',
      soilType: 'मिट्टी का प्रकार',
      organicMatter: 'जैविक पदार्थ',
      nitrogen: 'नाइट्रोजन (N)',
      phosphorus: 'फास्फोरस (P)',
      mainField: 'मुख्य क्षेत्र',
      newPlot: 'नया प्लॉट',
      areaSoilProfile: 'क्षेत्र मिट्टी प्रोफाइल',
      aiRecommendations: 'एआई अनुशंसाएं',
      irrigationTime: 'गेहूं की सिंचाई का सर्वोत्तम समय',
      irrigationDesc: 'मिट्टी की नमी के स्तर और मौसम के पूर्वानुमान के आधार पर',
      marketAlert: 'बाजार मूल्य अलर्ट',
      marketDesc: 'अगले सप्ताह गेहूं की कीमतों में 5% की वृद्धि की उम्मीद',
      overview: 'आज की आपकी खेती का अवलोकन',
    },
  },
  ta: {
    translation: {
      welcome: 'வரவேற்பு',
      dashboard: 'டாஷ்போர்டு',
      social: 'சமூக',
      trade: 'வர்த்தகம்',
      insight: 'நுண்ணறிவு',
      devices: 'சாதனங்கள்',
      control: 'கட்டுப்பாடு',
      learn: 'கற்றுக்கொள்',
      profile: 'சுயவிவரம்',
      waterQuality: 'நீர் தரம்',
      temperature: 'வெப்பநிலை',
      pH: 'பிஹெச் அளவு',
      tds: 'டிடிஎஸ்',
      turbidity: 'கலங்கல்',
      location: 'இடம்',
      signIn: 'உள்நுழைக',
      signOut: 'வெளியேறு',
      weather: 'வானிலை',
      humidity: 'ஈரப்பதம்',
      windSpeed: 'காற்றின் வேகம்',
      partlyCloudy: 'ஓரளவு மேகமூட்டம்',
      active: 'செயலில்',
      soilType: 'மண் வகை',
      organicMatter: 'கரிம பொருள்',
      nitrogen: 'நைட்ரஜன் (N)',
      phosphorus: 'பாஸ்பரஸ் (P)',
      mainField: 'முக்கிய வயல்',
      newPlot: 'புதிய நிலம்',
      areaSoilProfile: 'பகுதி மண் விவரம்',
      aiRecommendations: 'AI பரிந்துரைகள்',
      irrigationTime: 'கோதுமை பாசனத்திற்கான சிறந்த நேரம்',
      irrigationDesc: 'மண் ஈரப்பதம் மற்றும் வானிலை முன்னறிவிப்பின் அடிப்படையில்',
      marketAlert: 'சந்தை விலை எச்சரிக்கை',
      marketDesc: 'அடுத்த வாரம் கோதுமை விலை 5% உயரும் என எதிர்பார்க்கப்படுகிறது',
      overview: 'இன்றைய உங்கள் விவசாய கண்ணோட்டம்',
    },
  },
  te: {
    translation: {
      welcome: 'స్వాగతం',
      dashboard: 'డాష్బోర్డ్',
      social: 'సామాజిక',
      trade: 'వాణిజ్యం',
      insight: 'అంతర్దృష్టి',
      devices: 'పరికరాలు',
      control: 'నియంత్రణ',
      learn: 'నేర్చుకోండి',
      profile: 'ప్రొఫైల్',
      waterQuality: 'నీటి నాణ్యత',
      temperature: 'ఉష్ణోగ్రత',
      pH: 'పిహెచ్ స్థాయి',
      tds: 'టిడిఎస్',
      turbidity: 'అస్పష్టత',
      location: 'స్థానం',
      signIn: 'సైన్ ఇన్',
      signOut: 'సైన్ అవుట్',
      weather: 'వాతావరణం',
      humidity: 'తేమ',
      windSpeed: 'గాలి వేగం',
      partlyCloudy: 'పాక్షికంగా మేఘావృతం',
      active: 'యాక్టివ్',
      soilType: 'నేల రకం',
      organicMatter: 'సేంద్రీయ పదార్థం',
      nitrogen: 'నైట్రోజన్ (N)',
      phosphorus: 'ఫాస్పరస్ (P)',
      mainField: 'ప్రధాన పొలం',
      newPlot: 'కొత్త ప్లాట్',
      areaSoilProfile: 'ప్రాంత నేల ప్రొఫైల్',
      aiRecommendations: 'AI సిఫార్సులు',
      irrigationTime: 'గోధుమ సాగునీటి కోసం అనుకూల సమయం',
      irrigationDesc: 'నేల తేమ స్థాయిలు మరియు వాతావరణ సూచన ఆధారంగా',
      marketAlert: 'మార్కెట్ ధర హెచ్చరిక',
      marketDesc: 'వచ్చే వారం గోధుమ ధరలు 5% పెరుగుతాయని అంచనా',
      overview: 'ఈరోజు మీ వ్యవసాయ అవలోకనం',
    },
  },
  ml: {
    translation: {
      welcome: 'സ്വാഗതം',
      dashboard: 'ഡാഷ്ബോർഡ്',
      social: 'സാമൂഹിക',
      trade: 'വ്യാപാരം',
      insight: 'ഉൾക്കാഴ്ച',
      devices: 'ഉപകരണങ്ങൾ',
      control: 'നിയന്ത്രണം',
      learn: 'പഠിക്കുക',
      profile: 'പ്രൊഫൈൽ',
      waterQuality: 'ജല ഗുണനിലവാരം',
      temperature: 'താപനില',
      pH: 'പിഎച്ച് നില',
      tds: 'ടിഡിഎസ്',
      turbidity: 'മങ്ങൽ',
      location: 'സ്ഥാനം',
      signIn: 'സൈൻ ഇൻ',
      signOut: 'സൈൻ ഔട്ട്',
      weather: 'കാലാവസ്ഥ',
      humidity: 'ആർദ്രത',
      windSpeed: 'കാറ്റിന്റെ വേഗത',
      partlyCloudy: 'ഭാഗികമായി മേഘാവൃതം',
      active: 'സജീവം',
      soilType: 'മണ്ണിന്റെ തരം',
      organicMatter: 'ജൈവ വസ്തു',
      nitrogen: 'നൈട്രജൻ (N)',
      phosphorus: 'ഫോസ്ഫറസ് (P)',
      mainField: 'പ്രധാന വയൽ',
      newPlot: 'പുതിയ പ്ലോട്ട്',
      areaSoilProfile: 'പ്രദേശത്തെ മണ്ണ് പ്രൊഫൈൽ',
      aiRecommendations: 'AI ശുപാർശകൾ',
      irrigationTime: 'ഗോതമ്പ് ജലസേചനത്തിനുള്ള അനുയോജ്യമായ സമയം',
      irrigationDesc: 'മണ്ണിലെ ഈർപ്പ നില, കാലാവസ്ഥ പ്രവചനം എന്നിവയെ അടിസ്ഥാനമാക്കി',
      marketAlert: 'വിപണി വില അലേർട്ട്',
      marketDesc: 'അടുത്ത ആഴ്ച ഗോതമ്പ് വില 5% ഉയരുമെന്ന് പ്രതീക്ഷിക്കുന്നു',
      overview: 'ഇന്നത്തെ നിങ്ങളുടെ കൃഷി അവലോകനം',
    },
  },
  or: {
    translation: {
      welcome: 'ସ୍ୱାଗତ',
      dashboard: 'ଡ୍ୟାସବୋର୍ଡ',
      social: 'ସାମାଜିକ',
      trade: 'ବ୍ୟବସାୟ',
      insight: 'ଅନ୍ତର୍ଦୃଷ୍ଟି',
      devices: 'ଉପକରଣ',
      control: 'ନିୟନ୍ତ୍ରଣ',
      learn: 'ଶିଖନ୍ତୁ',
      profile: 'ପ୍ରୋଫାଇଲ',
      waterQuality: 'ଜଳ ଗୁଣବତ୍ତା',
      temperature: 'ତାପମାତ୍ରା',
      pH: 'ପିଏଚ ସ୍ତର',
      tds: 'ଟିଡିଏସ',
      turbidity: 'ଘୋଳା',
      location: 'ସ୍ଥାନ',
      signIn: 'ସାଇନ ଇନ',
      signOut: 'ସାଇନ ଆଉଟ',
      weather: 'ପାଣିପାଗ',
      humidity: 'ଆର୍ଦ୍ରତା',
      windSpeed: 'ପବନ ବେଗ',
      partlyCloudy: 'ଆଂଶିକ ମେଘୁଆ',
      active: 'ସକ୍ରିୟ',
      soilType: 'ମୃତ୍ତିକା ପ୍ରକାର',
      organicMatter: 'ଜୈବିକ ପଦାର୍ଥ',
      nitrogen: 'ନାଇଟ୍ରୋଜେନ (N)',
      phosphorus: 'ଫସଫରସ (P)',
      mainField: 'ମୁଖ୍ୟ କ୍ଷେତ୍ର',
      newPlot: 'ନୂତନ ପ୍ଲଟ',
      areaSoilProfile: 'ଅଞ୍ଚଳ ମୃତ୍ତିକା ପ୍ରୋଫାଇଲ',
      aiRecommendations: 'AI ସୁପାରିଶ',
      irrigationTime: 'ଗହମ ଜଳସେଚନ ପାଇଁ ଉପଯୁକ୍ତ ସମୟ',
      irrigationDesc: 'ମୃତ୍ତିକା ଆର୍ଦ୍ରତା ସ୍ତର ଏବଂ ପାଣିପାଗ ପୂର୍ବାନୁମାନ ଆଧାରିତ',
      marketAlert: 'ବଜାର ମୂଲ୍ୟ ଚେତାବନୀ',
      marketDesc: 'ଆସନ୍ତା ସପ୍ତାହରେ ଗହମ ମୂଲ୍ୟ 5% ବୃଦ୍ଧି ହେବ',
      overview: 'ଆଜିର ଆପଣଙ୍କ କୃଷି ସମୀକ୍ଷା',
    },
  },
  bn: {
    translation: {
      welcome: 'স্বাগতম',
      dashboard: 'ড্যাশবোর্ড',
      social: 'সামাজিক',
      trade: 'ব্যবসা',
      insight: 'অন্তর্দৃষ্টি',
      devices: 'ডিভাইস',
      control: 'নিয়ন্ত্রণ',
      learn: 'শিখুন',
      profile: 'প্রোফাইল',
      waterQuality: 'জলের গুণমান',
      temperature: 'তাপমাত্রা',
      pH: 'পিএইচ মাত্রা',
      tds: 'টিডিএস',
      turbidity: 'ঘোলাত্ব',
      location: 'অবস্থান',
      signIn: 'সাইন ইন',
      signOut: 'সাইন আউট',
      weather: 'আবহাওয়া',
      humidity: 'আর্দ্রতা',
      windSpeed: 'বাতাসের গতি',
      partlyCloudy: 'আংশিক মেঘলা',
      active: 'সক্রিয়',
      soilType: 'মাটির ধরন',
      organicMatter: 'জৈব পদার্থ',
      nitrogen: 'নাইট্রোজেন (N)',
      phosphorus: 'ফসফরাস (P)',
      mainField: 'প্রধান ক্ষেত্র',
      newPlot: 'নতুন প্লট',
      areaSoilProfile: 'এলাকার মাটির প্রোফাইল',
      aiRecommendations: 'AI সুপারিশ',
      irrigationTime: 'গমের সেচের জন্য উপযুক্ত সময়',
      irrigationDesc: 'মাটির আর্দ্রতা স্তর এবং আবহাওয়া পূর্বাভাসের ভিত্তিতে',
      marketAlert: 'বাজার মূল্য সতর্কতা',
      marketDesc: 'আগামী সপ্তাহে গমের দাম 5% বাড়বে বলে আশা করা হচ্ছে',
      overview: 'আজকের আপনার কৃষি পর্যালোচনা',
    },
  },
  
  kn: {
    translation: {
      welcome: 'ಸ್ವಾಗತ',
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      social: 'ಸಾಮಾಜಿಕ',
      trade: 'ವ್ಯಾಪಾರ',
      insight: 'ಒಳನೋಟ',
      devices: 'ಸಾಧನಗಳು',
      control: 'ನಿಯಂತ್ರಣ',
      learn: 'ಕಲಿಯಿರಿ',
      profile: 'ಪ್ರೊಫೈಲ್',
      waterQuality: 'ನೀರಿನ ಗುಣಮಟ್ಟ',
      temperature: 'ತಾಪಮಾನ',
      pH: 'ಪಿಎಚ್ ಮಟ್ಟ',
      tds: 'ಟಿಡಿಎಸ್',
      turbidity: 'ಕಲುಷಿತತೆ',
      location: 'ಸ್ಥಳ',
      signIn: 'ಸೈನ್ ಇನ್',
      signOut: 'ಸೈನ್ ಔಟ್',
      weather: 'ಹವಾಮಾನ',
      humidity: 'ತೇವಾಂಶ',
      windSpeed: 'ಗಾಳಿಯ ವೇಗ',
      partlyCloudy: 'ಭಾಗಶಃ ಮೋಡ',
      active: 'ಸಕ್ರಿಯ',
      soilType: 'ಮಣ್ಣಿನ ಪ್ರಕಾರ',
      organicMatter: 'ಸಾವಯವ ವಸ್ತು',
      nitrogen: 'ನೈಟ್ರೋಜನ್ (N)',
      phosphorus: 'ಫಾಸ್ಫರಸ್ (P)',
      mainField: 'ಮುಖ್ಯ ಕ್ಷೇತ್ರ',
      newPlot: 'ಹೊಸ ಪ್ಲಾಟ್',
      areaSoilProfile: 'ಪ್ರದೇಶದ ಮಣ್ಣಿನ ಪ್ರೊಫೈಲ್',
      aiRecommendations: 'AI ಶಿಫಾರಸುಗಳು',
      irrigationTime: 'ಗೋಧಿ ನೀರಾವರಿಗೆ ಸೂಕ್ತ ಸಮಯ',
      irrigationDesc: 'ಮಣ್ಣಿನ ತೇವಾಂಶ ಮಟ್ಟ ಮತ್ತು ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಯ ಆಧಾರದ ಮೇಲೆ',
      marketAlert: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಎಚ್ಚರಿಕೆ',
      marketDesc: 'ಮುಂದಿನ ವಾರ ಗೋಧಿ ಬೆಲೆ 5% ಏರಿಕೆಯಾಗುವ ನಿರೀಕ್ಷೆ',
      overview: 'ಇಂದಿನ ನಿಮ್ಮ ಕೃಷಿ ಅವಲೋಕನ',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;