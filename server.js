const express = require('express');
const methodOverride = require('method-override');
// Global variables
const PORT = 4000;
const controllers = require("./controllers");

// Run my express dependency
const app = express();


/* == App configs == */
app.set('view engine', 'ejs');

/* == middlewares == */
app.use(express.static('public'))

/* = this should be near the top, above the routes == */
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

/* == use controllers == */
app.use("/", controllers.book);

// app.use("/", controllers.book, controllers.user, controllers.review);

app.get("/*", (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404", context);
});

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));