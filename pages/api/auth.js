import RealtorApiServices from "../../services/RealtorApiServices";

export default async(req, res) => {
  const userName = req.query.email;
  const password = req.query.password;

  const result = await RealtorApiServices.auth(userName, password);

  console.log(result)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result.data));
}