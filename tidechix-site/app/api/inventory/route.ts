import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = process.env.GOOGLE_SHEET_CSV_URL;

    if (!url) {
      return NextResponse.json(
        { error: "Missing GOOGLE_SHEET_CSV_URL" },
        { status: 500 }
      );
    }

    const response = await fetch(url, {
      cache: "no-store",
    });

    const csv = await response.text();

    const rows = csv
      .split("\n")
      .slice(1)
      .map((row) => {
        const cols = row.split(",");

        return {
          id: cols[0]?.trim(),
          name: cols[1]?.trim(),
          stock: Number(cols[2]),
          active: cols[3]?.trim() === "TRUE",
          threshold: Number(cols[4]),
          status: cols[5]?.trim(),
        };
      });

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load inventory" },
      { status: 500 }
    );
  }
}