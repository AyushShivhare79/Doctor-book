import Fuse from "fuse.js";
import { getAdminData } from "../../lib/actions/getAdminData";
import { NextRequest, NextResponse } from "next/server";

const data = await getAdminData();

const fuse = new Fuse(data, {
  keys: ["firstName", "lastName", "category"],
  includeScore: true,
});

async function search(req: NextRequest) {
  const userInfo = await req.json();
  const result = fuse.search(userInfo.search);
  const characterResult = result.map((result) => result.item);

  return NextResponse.json(characterResult);
}

export { search as GET, search as POST };
