import RealtorApiServices from "../../services/RealtorApiServices";

export default async(req, res) => {
  const tokenType = req.query.tokenType;
  const token = req.query.token;

  const result = await RealtorApiServices.statistics(tokenType, token);

  console.log(result)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result.data));
}