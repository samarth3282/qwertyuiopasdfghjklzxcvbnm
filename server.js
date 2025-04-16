const express = require("express");
const app = express();

const os_p1 = require("./subjects/os/p1");
const os_p2 = require("./subjects/os/p2");
const os_p3 = require("./subjects/os/p3");
const os_p4 = require("./subjects/os/p4");
const os_p5 = require("./subjects/os/p5");
const os_p6 = require("./subjects/os/p6");
const os_p7 = require("./subjects/os/p7");
const os_p8 = require("./subjects/os/p8");
const os_p9 = require("./subjects/os/p9");
const os_p10 = require("./subjects/os/p10");
const roundrobin = require("./subjects/os/roundrobin");
const srtf = require("./subjects/os/srtf");
const sjf = require("./subjects/os/sjf");

const dc_p1 = require("./subjects/dc/p1");
const dc_p2 = require("./subjects/dc/p2");
const dc_p3 = require("./subjects/dc/p3");
const dc_p4 = require("./subjects/dc/p4");
const dc_p5 = require("./subjects/dc/p5");
const dc_p6 = require("./subjects/dc/p6");
const dc_p7 = require("./subjects/dc/p7");
const dc_p8 = require("./subjects/dc/p8");
const dc_p9 = require("./subjects/dc/p9");
const dc_p10 = require("./subjects/dc/p10");

const fswd_date = require("./subjects/fswd/date");
const fswd_dbms = require("./subjects/fswd/dbms");
const fswd_dragdrop = require("./subjects/fswd/dragdrop");
const fswd_dynamiclist = require("./subjects/fswd/dynamiclist");
const fswd_geolocation = require("./subjects/fswd/geolocation");
const fswd_localstorage = require("./subjects/fswd/localstorage");
const fswd_uppercase = require("./subjects/fswd/uppercase");
const fswd_crud = require("./subjects/fswd/crud");
const fswd_form = require("./subjects/fswd/form");

const fswd_date_me = require("./subjects/fswd/dateme");
const fswd_dbms_me = require("./subjects/fswd/dbmsme");
const fswd_dragdrop_me = require("./subjects/fswd/dragdropme");
const fswd_dynamiclist_me = require("./subjects/fswd/dynamiclistme");
const fswd_geolocation_me = require("./subjects/fswd/geolocationme");
const fswd_localstorage_me = require("./subjects/fswd/localstorageme");
const fswd_uppercase_me = require("./subjects/fswd/uppercaseme");
const fswd_crud_me = require("./subjects/fswd/crudme");

const aiml_p2 = require("./subjects/aiml/p2");
const aiml_p3 = require("./subjects/aiml/p3");
const aiml_p4 = require("./subjects/aiml/p4");
const aiml_p5 = require("./subjects/aiml/p5");
const aiml_p6 = require("./subjects/aiml/p6");
const aiml_p7 = require("./subjects/aiml/p7");
const aiml_p8 = require("./subjects/aiml/p8");
const aiml_p9 = require("./subjects/aiml/p9");
const aiml_p10 = require("./subjects/aiml/p10");

app.use("/os/p1", os_p1);
app.use("/os/p2", os_p2);
app.use("/os/p3", os_p3);
app.use("/os/p4", os_p4);
app.use("/os/p5", os_p5);
app.use("/os/p6", os_p6);
app.use("/os/p7", os_p7);
app.use("/os/p8", os_p8);
app.use("/os/p9", os_p9);
app.use("/os/p10", os_p10);
app.use("/os/roundrobin", roundrobin);
app.use("/os/srtf", srtf);
app.use("/os/sjf", sjf);

app.use("/dc/p1", dc_p1);
app.use("/dc/p2", dc_p2);
app.use("/dc/p3", dc_p3);
app.use("/dc/p4", dc_p4);
app.use("/dc/p5", dc_p5);
app.use("/dc/p6", dc_p6);
app.use("/dc/p7", dc_p7);
app.use("/dc/p8", dc_p8);
app.use("/dc/p9", dc_p9);
app.use("/dc/p10", dc_p10);

app.use("/fswd/date", fswd_date);
app.use("/fswd/dbms", fswd_dbms);
app.use("/fswd/dragdrop", fswd_dragdrop);
app.use("/fswd/dynamiclist", fswd_dynamiclist);
app.use("/fswd/geolocation", fswd_geolocation);
app.use("/fswd/localstorage", fswd_localstorage);
app.use("/fswd/uppercase", fswd_uppercase);
app.use("/fswd/crud", fswd_crud);
app.use("/fswd/form", fswd_form);

app.use("/fswd/dateme", fswd_date_me);
app.use("/fswd/dbmsme", fswd_dbms_me);
app.use("/fswd/dragdropme", fswd_dragdrop_me);
app.use("/fswd/dynamiclistme", fswd_dynamiclist_me);
app.use("/fswd/geolocationme", fswd_geolocation_me);
app.use("/fswd/localstorageme", fswd_localstorage_me);
app.use("/fswd/uppercaseme", fswd_uppercase_me);
app.use("/fswd/crudme", fswd_crud_me);

app.use("/aiml/p2", aiml_p2);
app.use("/aiml/p3", aiml_p3);
app.use("/aiml/p4", aiml_p4);
app.use("/aiml/p5", aiml_p5);
app.use("/aiml/p6", aiml_p6);
app.use("/aiml/p7", aiml_p7);
app.use("/aiml/p8", aiml_p8);
app.use("/aiml/p9", aiml_p9);
app.use("/aiml/p10", aiml_p10);

app.get("/", (req, res) => {
  res.send("Welcome to the Express backend!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
