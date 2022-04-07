import app from "firebase/compat/app";
import firebaseConfig from './config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import Router from 'next/router';



class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

   async registrar(nombre, email, password){
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName : nombre
        })
    }

    // Inicia sesion del usuario
    async login (email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Cierre la sesion del usuario

    async cerrarSesion(){
        await this.auth.signOut();
        Router.push('/login');
        
    }
}

const firebase = new Firebase();

export default firebase;