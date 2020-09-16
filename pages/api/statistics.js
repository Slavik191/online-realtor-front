import RealtorApiServices from "../../services/RealtorApiServices";

export default async(req, res) => {
  const tokenType = req.query.tokenType;
  const token = req.query.token;
  const month = req.query.month;

  const result = await RealtorApiServices.statistics(tokenType, token, month);

  console.log(result)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result.data));
}