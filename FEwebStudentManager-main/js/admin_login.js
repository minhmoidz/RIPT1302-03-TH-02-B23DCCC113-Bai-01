const userList = [
  {
    userName: "123",
    userImage: "../../img/101.png",
    userUsername: "admin",
    userPasword: "admin",
  },
];

const usernameLoginField = document.querySelector(".username-field");
const passowrdLoginField = document.querySelector(".password-field");

const btnLogin = document.getElementById("btn-login");

function checkLogin() {
  userList.forEach((user) => {
    if (true) {
      localStorage.setItem("userName", user.userName == userList.userName);
      localStorage.setItem("userPassowrd", user.userPasword == userList.userPasword);
      localStorage.setItem("userImage", user.userImage);
      // Dashboar direct page
      window.location.href = "page/student_manager.html";
    }
    return;
  });
}
