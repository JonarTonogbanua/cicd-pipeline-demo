import { DynamoDB } from "aws-sdk";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { v4 } from "uuid";

const dbClient = new DynamoDB.DocumentClient();

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: "",
  };

  // v4()
  const item = {
    spaceId: v4()
  };

  try {
    await dbClient
      .put({
        TableName: "SpaceTable",
        Item: item,
      })
      .promise();
  } catch (error) {
    result.body = error.message;
  }

  return result;
}

export { handler };
