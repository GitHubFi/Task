import firebase from 'firebase';
let config = {
    // apiKey: "AIzaSyAaW2SVkUlv9JminD7WICxmGOOoxD44YvU",
    // authDomain: "real-state-app-f55aa.firebaseapp.com",
    // databaseURL: "https://real-state-app-f55aa.firebaseio.com",
    // projectId: "real-state-app-f55aa",
    // storageBucket: "real-state-app-f55aa.appspot.com",
    // messagingSenderId: "419163463767"

    apiKey: "AIzaSyB9Ja_ugcwuBHyCZMOIKeGaTj4o2Quc8ys",
    authDomain: "pixarch-crm.firebaseapp.com",
    databaseURL: "https://pixarch-crm.firebaseio.com",
    projectId: "pixarch-crm",
    storageBucket: "pixarch-crm.appspot.com",
    messagingSenderId: "582660944374",
    appId: "1:582660944374:web:85ec71d99e66a37f"

};
let dbConfig = firebase.initializeApp(config);

export default dbConfig;