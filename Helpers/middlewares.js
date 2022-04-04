function checkFieldsPost(req, res, next) {
  const { username, password } = req.body;

  if (username && password) {
    next();
  } else {
    // res.status(400);
    res
      .status(400)
      .json({ message: "User Game Form field not can't be empty" });
  }
}

function checkFieldsPostUserGameBiodata(req, res, next) {
  const { fullname} = req.body;

  if (fullname) {
    next();
  } else {
    // res.status(400);
    res
      .status(400)
      .json({ message: "User Game Biodata Form field not can't be empty" });
  }
}



module.exports = {
  checkFieldsPost,
  checkFieldsPostUserGameBiodata,
};
