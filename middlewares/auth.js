const auth = (req, res, next) => {
  //Authentication logic goes here
    console.log(req.headers);

    // if(!authori)
  next(); // Talako code lai chalna dinxa
};

export default auth;
