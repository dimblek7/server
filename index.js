const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

/**********************************/
// app.get("/", (req, res) => {
//     res.send({ hi: "Kiran Dimble" });
// });

// const option = {
//     socketTimeoutMS: 30000,
//     keepAlive: true,
//     reconnectTries: 30000
// };
// mongoose
//     .connect(
//         keys.mongoURI,
//         option
//     )
//     .then(
//         function() {
//             //connected successfully
//             console.log("here");
//         },
//         function(err) {
//             //err handle
//             console.log("err" + err);
//         }
//     );
