import { Injectable } from '@nestjs/common';
import { Endpoint, S3 } from 'aws-sdk';

@Injectable()
export class StorageService {
  endpoint = new Endpoint(process.env.AWS_ENDPOINT_BACKBLAZE);

  s3 = new S3({
    endpoint: this.endpoint,
    credentials: {
      accessKeyId: process.env.AWS_KEY_ID,
      secretAccessKey: process.env.AWS_APP_KEY,
    },
  });

  storageImage = async (product_id, path, buffer, mimetype) => {
    const file = await this.s3
      .upload({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `products/${product_id}/${path}`,
        Body: buffer,
        ContentType: mimetype,
      })
      .promise();

    return file;
  };

  // Verify images' address to delete
  deleteImage = async (path) => {
    await this.s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: path,
      })
      .promise();
  };
}
