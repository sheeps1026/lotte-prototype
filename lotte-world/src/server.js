const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("서버가 가동");
});

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const session = require("express-session");
// const { dblClick } = require("@testing-library/user-event/dist/click");

// app.use(
//   session({ secret: , resave: true, saveUninitialized: false })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// ---------------------------------- 이렇게하면되는데 (성공)

app.get("/test", function (req, res) {
  res.sendFile(__dirname + "/src/test.html");
});

app.post("/add2", (req, res) => {
  res.send("테스트 서버 ㄱ되나요");

  console.log(req.body.M_useid);
  console.log(req.body.M_pwdck);
});

// -----------------------------

app.get("/TicketingPage/Signup", function (req, res) {
  res.sendFile(__dirname + "/src/pages/user/signup.js");
});

app.post("/add", function (req, res) {
  res.send("회원가입 전송");

  console.log(req.body.M_useid);
  console.log(req.body.M_pwdck);
});

// ---------------------------------------------------- 구분선

// 로그인 요청 검증
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "M_useid",
//       passwordField: "M_pwdck",
//       session: true,
//       passReqToCallback: false,
//     },

//     function (id, pwd, done) {
//       db.collection("login").findOne({ id: M_useid }, function (err, res) {
//         if (err) return done(err);

//         if (!res) return done(null, false, { message: "id 없음" });

//         if (pwd == res.M_pwdck) {
//           return done(null, res);
//         } else {
//           return done(null, false, { message: "비번 틀림" });
//         }
//       });
//     }
//   )
// );
