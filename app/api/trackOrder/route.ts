import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // const header = await request.headers.get("authorization")
  const { searchId }: { searchId: string } = body;

  if (!searchId.startsWith("AIREZ-")) {
    return NextResponse.json({
      message: "invalid trackking ID all tracking Id should Start with: AIREZ-",
    });
  }

  return NextResponse.json({
    message: "aiit cool we recieved you data and processing you information now please hold on",
    order: {
      id: searchId,
      user: {
        email: "chukwuemekacodec@gmail.com",
        name: "john Doe",
        phone: "+1 (099) 43434",
        address: "2 smd road califonia ",
      },
      item: ["bed", "milk"],
      activeStep: 2,
    },
  });
}
