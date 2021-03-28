export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      first_name: 'David',
      last_name: 'Beckham',
      email: 'david.beckam@vivifyideas.com'
    })
  );
};
