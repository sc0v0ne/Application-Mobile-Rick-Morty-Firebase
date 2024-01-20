# Work - Mobile Discipline

🎓 College: [Faculdade Metodista Granbery](http://granbery.edu.br/)

👨‍🏫 Teacher: [Érica C. R. Carvalho - Github](https://github.com/ericacrcarvalho) | [Linkedin](https://www.linkedin.com/in/ericacrcarvalho/)


---
#### Subject: Advanced Mobile Development
#### Delivery date: 23/10/22 (AVA plataform) - Presentation date: 24/10/22
#### Value: 3 points
#### Theme:Continue the final work of the previous subject / Student choiceThe work is individual

---

### Theme suggestion

Create an application that contains a login and registration screen using FirebaseAuthentication. At least 4 screens must be created, one screen being the Assessment 1 app and another screen the Assessment 2 app.
 
### The initial screen must contain the following items:

- a) Company logo/theme
- b) Two fields for the user to fill in and password
- c) A button to log in/access
- d) A button to register a new userNote:

Attention:

- i) When loading the initial screen, there must be an animation in the View containing the user and password fields and the login and register buttons.
- ii) When typing the user, when the keyboard opens, the logo should decrease, when the keyboard closes, the logo should return to its original size. 

### The registration screen must contain the following items:

- a) A field to insert the new user
- b) A field to insert the password 
- c) A field to confirm the new password 

Attention:

- i) There must be at least 1 animation on the registration screen.
- ii ) After registering a new user, they must be redirected to the Login screen. 
 
### After logging in, they must be redirected to a new screen that must contain Tabs navigation with at least two screens:

- a) Home: the content of this screen it is at the student's discretion, but must contain: Flatlist, Card and Modal (Modalize)
- b) App of Assessment 1 (mandatory).
- c) App of Assessment 2 (mandatory).
- d) Other screen(s) which(s) is)or (optional).

Attention:

i) Each of these screens must contain at least 1 animation (View, Text, Image,etc)

-----

Important information:

1) The code must be organized, indented and readable. Folders must be created for each “part” of the code: components, images, screens, routes, etc.

2) Colors and sizes must be in a separate file (eg colors.js and sizes.js)

3) Buttons and text inputs, etc. must be a stateless component (eg MyButton.js and MyTextInput.js)

4) The following contents must appear in the application:

- React Native Components 
- React Hooks (at least 4, among the options: useState, useEffect, useContext, useRef, useMemo and useCallback) 
- Navigation 
- Animation 
- Flatlist 
- Card 
- Modalize

5) Remember to check if the user is already logged in or not. If you are logged in, go to the Home screen.

-----


Observations:

- I) The work is individual and it is not allowed to copy the work of a colleague. If this occurs, the grade will be divided by the total number of students involved in the copy.

- II) The Github link containing the work (or the compressed file) must be sent by the AVA by 11:00 pm on 10/23/22.

- III) Any questions/ problem, contact us by email.

## Firebase Authentication

1. [Firebase:](https://console.firebase.google.com/)
```bash
$ npm install firebase
```

2. [Tutorial Expo e Firebase:](https://docs.expo.dev/guides/using-firebase/)

3. Arquivo de configuração do Firebase em anexo (firebaseconfig.js)

4. Em todas as páginas, importar:

```javascript
import { auth } from '../config/firebaseconfig';
```

5. Funções para a tela 'Login': signInWithEmailAndPassword e onAuthStateChanged

```javascript
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
```

6. Função para a tela 'Cadastro': createUserWithEmailAndPassword 

```javascript
import { createUserWithEmailAndPassword } from 'firebase/auth';
```

7. Função para a tela 'Home': signOut

```javascript
import { signOut } from 'firebase/auth';
```

8. [Tratando os erros (lista de erros do firebase): ](https://gist.github.com/Albejr/a38cdeac247ef177986c99629680afb4)

### FLATLIST

[Flatlist](https://reactnative.dev/docs/flatlist)

### CARD

[Card](https://callstack.github.io/react-native-paper/card.html)

```bash
    npm install react-native-paper@5.0.0-rc.4
```

### Modalize

[Modalize](https://jeremybarbet.github.io/react-native-modalize/#/)

```bash
    npm add react-native-modalize

    npm add react-native-gesture-handler

    npx pod-install ios
```

[Modal](https://reactnative.dev/docs/modal)

[useRef](https://pt-br.reactjs.org/docs/hooks-reference.html#useref)
