import { getProduct } from "@/app/utils/dataQuery";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const params = req.nextUrl.searchParams;
  const response = await getProduct(parseInt(params.get("id")));
  return NextResponse.json({ data: response, status: 200 });
}
