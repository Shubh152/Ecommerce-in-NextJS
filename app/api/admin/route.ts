import { NextRequest, NextResponse } from "next/server";
import { createCover, createImage, createProduct } from "@/app/utils/dataQuery";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.formData();
  const productName = data.get("productName") as string;
  const productDesc = data.get("productDescription") as string;
  const productPrice = data.get("productPrice") as string;
  const cover = data.get("coverImage[]") as File;
  const images = data.getAll("images[]") as File[];
  const category = data.get("category") as string
  const subcategory = data.get("subcategory") as string
  const newArrival = data.get("newArrival") as string;
  const topSelling = data.get("newArrival") as string;
  const coverImageUrl = await createCover(cover,productName);
  const size = images.length;
  let imagesUrl = new Array(size);
  for(var i = 0; i < size; i++){
    imagesUrl[i] = await createImage(images[i],productName);
  }
  console.log({newArrival,topSelling});
  
  const response = await createProduct(
    productName,
    productDesc,
    productPrice,
    coverImageUrl,
    imagesUrl,
    category,
    subcategory,
    newArrival,
    topSelling
  )
  console.log(response);
  
  return NextResponse.json({ status: 200 });
}
