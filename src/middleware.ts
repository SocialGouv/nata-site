import { NextRequest, NextResponse, userAgent } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  const OS = device.model === "iPhone" ? "iOS" : "Android";

  console.log("device : ", device);

  if (viewport === "mobile" && OS === "iOS") {
    return NextResponse.redirect(
      "https://apps.apple.com/us/app/nata/id1670657282"
    );
  }
  if (viewport === "mobile" && OS === "Android") {
    return NextResponse.redirect(
      "https://play.google.com/store/apps/details?id=com.nata01&gl=FR&pli=1"
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/app-stores",
};
