import { S3 } from "aws-sdk";

const s3Client = new S3();

async function handler(event: any, context: any) {
  const bucket = await s3Client.listBuckets().promise();
  console.log(event);

  return {
    statusCode: 200,
    body: "Here are you buckets: " + JSON.stringify(bucket.Buckets),
  };
}

export { handler };
