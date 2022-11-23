// import { emailRegex, pwRegex } from "../util.js";
import { authService } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

//회원가입
export function handleAuth(event) {
  const btnText = event.target.innerText;
  if (btnText === "가입하기") {
    // document.getElementById("signUpBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const signUpEmail = document.getElementById("signUpEmail").value;
    const signUpPassword = document.getElementById("signUpPassword").value;

    createUserWithEmailAndPassword(authService, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("회원가입 성공!");
        // window.location.hash = "/";
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errorMessage:", errorMessage);
        if (errorMessage.includes("email-already-in-use")) {
          alert("이미 가입된 이메일입니다.");
        }
      });
    // });
  } else {
    //로그인
    // console.log(event.target);
    // document.getElementById("loginBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const LoginInEmail = document.getElementById("LoginInEmail").value;
    const LoginInPassword = document.getElementById("LoginInPassword").value;
    signInWithEmailAndPassword(authService, LoginInEmail, LoginInPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.hash = "/";
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errorMessage:", errorMessage);
        if (errorMessage.includes("user-not-found")) {
          alert("가입되지 않은 회원입니다.");
          return;
        } else if (errorMessage.includes("wrong-password")) {
          alert("비밀번호가 잘못 되었습니다.");
        }
      });
    // });
  }
}

export const logout = () => {
  signOut(authService)
    .then(() => {
      // Sign-out successful.
      localStorage.clear();
      console.log("로그아웃 성공");
    })
    .catch((error) => {
      // An error happened.
      console.log("error:", error);
    });
};

// const login = document.querySelector(".login");
// const nav_menu = document.querySelector(".nav_menu");
// const navBar = document.querySelector(".navBar");
// const body = document.querySelector("body");
// const change = document.getElementById("csschange");

// login.addEventListener("click", () => {
//   let path = window.location.hash.replace("#", "");
//   if (path === "#login") {
//     change.href = "./" + css + "login.css";
//     nav_menu.style.visibility = "hidden";
//     navBar.style.visibility = "hidden";
//     body.style.backgroundColor = "white";
//   }