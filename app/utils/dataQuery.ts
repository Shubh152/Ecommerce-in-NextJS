import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { prisma, s3 } from "./dataClient";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function createProduct(
  productName: string,
  productDesc: string,
  productPrice: string,
  coverImageUrl: string,
  imagesUrl: string[],
  category : string,
  subcategory : string,
  newArrival : string,
  topSelling : string
) {
  try {
    const product = await prisma.product.create({
      data: {
        name: productName,
        description: productDesc,
        price: parseInt(productPrice),
        cover: coverImageUrl,
        images: [...imagesUrl],
        category : category,
        subcategory : subcategory,
        top_selling : topSelling == 'true',
        new_arrival : newArrival == 'true'
      },
    });
    return product;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function createCover(coverImage: File, productName: string) {
  const coverBuffer = await coverImage.arrayBuffer();
  const createCover = new PutObjectCommand({
    Body: coverBuffer,
    ContentType : "image/*",
    Key: productName + "_" + coverImage.name + "_" + Date.now(),
    Bucket: process.env.COVER_IMAGE_BUCKET,
  });
  const getCover = new GetObjectCommand({
    Bucket: process.env.COVER_IMAGE_BUCKET,
    Key: productName + "_" + coverImage.name + "_" + Date.now(),
  });
  try {
    await s3.send(createCover);
    const signedUrl = await getSignedUrl(s3, getCover, {
      expiresIn: 604800,
    });
    console.log(signedUrl);
    return signedUrl;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function createImage(image: File, productName: string) {
  const imageBuffer = await image.arrayBuffer();
  const createImage = new PutObjectCommand({
    Body: imageBuffer,
    ContentType : "image/*",
    Key: productName + "_" + image.name + "_" + Date.now(),
    Bucket: process.env.ALBUM_IMAGE_BUCKET,
  });
  const getImage = new GetObjectCommand({
    Key: productName + "_" + image.name + "_" + Date.now(),
    Bucket: process.env.ALBUM_IMAGE_BUCKET,
  });
  try {
    await s3.send(createImage);
    const signedUrl = await getSignedUrl(s3, getImage, {
      expiresIn: 604800,
    });
    console.log(signedUrl);
    return signedUrl;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getProduct(productId: number) {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        name: true,
        description: true,
        price: true,
        cover: true,
        images: true,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getShopCategory(productCategory: string) {
  try {
    const response = await prisma.product.findMany({
      where: {
        subcategory: productCategory,
      },
      select: {
        id : true,
        name: true,
        price: true,
        cover: true,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getShopAll() {
  try {
    const response = await prisma.product.findMany({
      select: {
        id :true,
        name: true,
        price: true,
        cover: true,
      }
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getNewArrival() {
  const response = await prisma.product.findMany({
    where : {
      new_arrival : true
    },
    select : {
      id : true,
      name :true,
      price : true,
      cover : true
    }
  })
}

export async function getTopSelling() {
  const response = await prisma.product.findMany({
    where : {
      top_selling : true
    },
    select : {
      id : true,
      name :true,
      price : true,
      cover : true
    }
  })
}