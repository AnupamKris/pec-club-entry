import clubDetails from "./clubdetails.json";
export default defineEventHandler(async (event) => {
  const { club } = await readBody(event);
  const clubData = clubDetails[club];
  console.log("senfing data", clubData);
  return {
    statusCode: 200,
    data: clubData,
  };
});
