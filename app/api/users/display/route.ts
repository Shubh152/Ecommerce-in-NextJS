import { getNewArrival, getTopSelling } from "@/app/utils/dataQuery";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const params = req.nextUrl.searchParams.get("panel");
  if (params == "new-arrival") {
    const response = await getNewArrival();
    return NextResponse.json({ data: response, status: 200 });
  } else if (params == "top-selling") {
    const response = await getTopSelling();
    return NextResponse.json({ data: response, status: 200 });
  }
}
