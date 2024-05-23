import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

const appendSpreadsheet = async (row: { Contact: string; Experience: string; "Risk capital": string; Date: Date }) => {
  const jwt = new JWT({
    email: process.env["GOOGLE_SHEETS_CLIENT_EMAIL"],
    key: (process.env["GOOGLE_SHEETS_PRIVATE_KEY"] || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(process.env["SPREADSHEET_ID"]!, jwt);

  await doc.loadInfo();

  const sheet = doc.sheetsById[Number(process.env["SHEET_ID"])];
  return await sheet.addRow(row);
};

export async function POST(Request: Request) {
  try {
    const { email_or_discord, experience, risk_capital } = await Request.json();
    await appendSpreadsheet({
      Contact: email_or_discord,
      Experience: experience,
      "Risk capital": risk_capital,
      Date: new Date(),
    });

    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.log(error);

    return Response.json({ error, status: 500 });
  }
}
