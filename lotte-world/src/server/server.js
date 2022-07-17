import Signin from "../pages/user/Signin";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

app.use(session({ secret: "", resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.get("/TicketingPage/Signin", function (req, res) {
  // console.log(req.user);

  res.render("siginin.js", {});
});

const loginChk(req, res, next) {
  // if (요청.user) { 
  //   next() 
  // } 
  console.log(req);
  // else { 
  //   res.send('로그인 안함') 
  // } 
}

passport.deserializeUser(function (id, done) {
  db.collection('login').findOne({ id: id }, function (err, res) {
    done(null, res)
  })
}); 


passport.use(
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "pw",
      session: true,
      passReqToCallback: false,
    },
    
    function (id, pwd, done) {
      db.collection("login").findOne({ id: id }, function (err, res) {
        if (err) return done(err);

        if (!res) return done(null, false, { message: "id 없음" });

        if (pwd == res.pw) {
          return done(null, res);
        } else {
          return done(null, false, { message: "비번 틀림" });
        }
      });
    }
  )
);
