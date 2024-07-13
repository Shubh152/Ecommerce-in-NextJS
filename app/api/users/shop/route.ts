import { getShopAll, getShopCategory } from "@/app/utils/dataQuery";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const subcategory = req.nextUrl.searchParams.get("subcat");
    console.log(subcategory);

    if (subcategory != null) {
      const response = await getShopCategory(subcategory);
      return NextResponse.json(response);
    } else {
      const response = await getShopAll();
      return NextResponse.json(response);
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
