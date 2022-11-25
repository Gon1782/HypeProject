import { dbService, authService } from "./firebase.js";
import {
  collection,
  orderBy,
  query,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

export const route = (event) => {
  event.preventDefault();
  window.location.hash = event.target.hash;
};

const routes = {
  404: "/templates/pages/404.html",
  "/": "/templates/pages/main.html",
  fashion: "/templates/pages/fashion.html",
  food: "/templates/pages/food.html",
  travel: "/templates/pages/travel.html",
  sports: "/templates/pages/sports.html",
  entertainment: "/templates/pages/entertainment.html",
  pop: "/templates/pages/pop.html",
  recent: "/templates/pages/recent.html",
  mypage: "/templates/pages/mypage.html",
  like: "/templates/pages/like.html",
  scrap: "/templates/pages/scrap.html",
  setting: "/templates/pages/setting.html",
  login: "/templates/pages/login.html",
  signin: "/templates/pages/signin.html",
  // 게시판 글 하고 등록
  board : "/templates/pages/board.html",
  wt_board : "/templates/pages/wt_board.html"
}

export const handleLocation = async () => {
  let path = window.location.hash.replace("#", "");

  if (path.length === 0) {
    path = "/";
  }
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());

  document.getElementById("main-page").innerHTML = html;
  if(path === 'wt_board'){
    CKEDITOR.replace("myeditor",{
    height:"300"
    ,filebrowserImageUploadUrl: '파일업로드 작업을 할 URL 혹은 파일 경로 ex)./aaa.php 이런식으로 ',
    filebrowserUploadMethod: 'form',
    });
  }
  if (path === "/") TypeText();

  const load_nickname = () => {
    document.getElementById("nickname").textContent =
      authService.currentUser.displayName ?? "닉네임 없음";

    document.getElementById("profileImg").src =
      authService.currentUser.photoURL ?? "/static/img/empty_profile.png";
  };

  if (path === "mypage" || path === "scrap" || path === "like") {
    load_nickname();
  }

  if (path === "setting") {
    // document.getElementById("username").textContent =
    //   authService.currentUser.displayName ?? "닉네임 없음";

    document.getElementById("profileView").src =
      authService.currentUser.photoURL ?? "/static/img/empty_profile.png";

    document.getElementById("urnameinput").placeholder =
      authService.currentUser.displayName ?? "닉네임 없음";
  }

  if (path === "signin" || path === "login") {
    hide_nav_bar();
  } else {
    show_nav_bar();
  }

  if (path === "mypage") {
    getHypeList();
  }
};

const show_nav_bar = () => {
  const nav_menu = document.querySelector(".nav_menu");
  const navBar = document.querySelector(".navBar");
  nav_menu.style.visibility = "visible";
  navBar.style.backgroundColor = "black";
}
const hide_nav_bar = () => {
  const nav_menu = document.querySelector(".nav_menu");
  const navBar = document.querySelector(".navBar");
  nav_menu.style.visibility = "hidden";
  navBar.style.backgroundColor = "white";
}

const getHypeList = async () => {
  let hypeList = [];
  const q = query(
    collection(dbService, "wt_board"),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const hypeObj = {
      id: doc.id,
      ...doc.data(),
    };
    hypeList.push(hypeObj);
    console.log(hypeList);
  });
  const iWrotePost = document.getElementById("iWrotePost");
  // const currentUid = authService.currentUser.uid;
  iWrotePost.innerHTML = "";
  hypeList.forEach((hypeObject) => {
    const temp_html = `
    <div class="mypage_wrap_box">
          <a href="#board" class="board_w" onclick="route(board)">
              <div class="img_area">
                  <img src="/static/img/img2.png" alt="img_area" />
              </div>
              <div class="write">
                  <div class="txt_area">
                      <ul>
                          <h4>${hypeObject.title}</h4>
                          <span>
                              <p>${hypeObject.title}</p>
                          </span>
                      </ul>
                      <div class="date">
                          <span>YYYY년 MM월 DD일</span>
                          <!-- <span>* 12개의 댓글</span> -->
                      </div>
                      <div class="author_index">
                          <img src="${hypeObject.profileImg}" alt="autor_index" />
                          <span>by ${hypeObject.nickname}</span>
                          <!-- <div class="like">
                  <img src="/img/heart.png" alt="like" />
                  <span>250</span>
                </div> -->
                      </div>
                  </div>
              </div>
          </a>
      </div>`;
    const main = document.createElement("main");
    main.innerHTML = temp_html;
  });
};