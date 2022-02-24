var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
  console.log(process.pid)
  res.send(`${process.pid}`);
});

router.get("/api/:n", function (req, res) {
  console.log(process.pid)

  let n = parseInt(req.params.n);
  let count = 0;

  let startTime = new Date().getTime();
  if (n > 50000000000) n = 50000000000;

  for (let i = 0; i <= n; i++) {
    count += i;
  }

  let endTime = new Date().getTime() - startTime;

  res.send(`Final count is ${count} in ${endTime/1000}seconds and running on ${process.pid}`);
});

module.exports = router;
