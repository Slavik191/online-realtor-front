import RealtorApiServices from "../../services/RealtorApiServices";

export default async(req, res) => {
  const result = await RealtorApiServices.announcements();

  console.log(result)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result.data.result));
}