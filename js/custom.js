import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from './firebase.js'
import {logincheck} from './logincheck.js';

import './firebase.js';
import './sign_up.js';
import './sign_in.js';
import './log_out.js';
import './test.js';

console.log('HOLA')

onAuthStateChanged(auth, async (user) => {

    if (user) {
      logincheck(user)
    }else{
      logincheck(user)
    }
})

try{
    console.log('Hola')
}catch(error){
    console.log(error)
}



