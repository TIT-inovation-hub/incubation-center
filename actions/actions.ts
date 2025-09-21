"use server";
import axios from "axios";
import Papa from "papaparse";

export interface TeamLeaderType {
  name: string;
  email: string;
  sem: string;
  phone: string;
  enrollement: string;
}

export interface MemberType {
  enrollement: string;
  phone: string;
  email: string;
}

export interface Data {
  timestamp: string;
  teamName: string;
  leader: TeamLeaderType;
  members: MemberType[];
  problemStatement: {
    theme: string;
    id: string;
    ppt: string;
  };
  status: string;
}

export async function getTeams(): Promise<Data[]> {
  try {
    const res = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTDnjtqJ5OMwgZ9NwLLZoMDVBykIxf6Up2ndUv7tjspcSU49mJbXU6vWF1ws8plDdnthoyfCsCn1C4N/pub?output=csv"
    );

    const { data } = Papa.parse(res.data, {
      header: true,
      skipEmptyLines: true,
    });

    const formattedData: Data[] = (data as Record<string, string>[]).map(
      (row) => {
        // Normalize keys: trim, remove newlines, lowercase
        const cleanRow: Record<string, string> = {};
        Object.keys(row).forEach((key) => {
          const cleanKey = key.replace(/\n/g, "").trim().toLowerCase();
          cleanRow[cleanKey] = row[key]?.trim() || "";
        });

        // Leader info
        const leader: TeamLeaderType = {
          name: cleanRow["team leader name"] || "",
          email: cleanRow["team leader email"] || "",
          sem: cleanRow["team leader sem"] || "",
          phone: cleanRow["team leader phone number"] || "",
          enrollement: cleanRow["team leader enrollement"] || "",
        };

        // Dynamically extract members
        const membersMap: Record<string, any> = {};

        Object.keys(cleanRow).forEach((key) => {
          const match = key.match(/team member (\d+)/);
          if (!match) return;
          const index = match[1];

          if (!membersMap[index]) membersMap[index] = {};

          if (key.includes("name"))
            membersMap[index].name = cleanRow[key] || "";
          else if (key.includes("enrollement"))
            membersMap[index].enrollement = cleanRow[key] || "";
          else if (key.includes("phone"))
            membersMap[index].phone = cleanRow[key] || "";
          else if (key.includes("gmail"))
            membersMap[index].email = cleanRow[key] || "";
        });

        const members: MemberType[] = Object.values(membersMap);

        return {
          timestamp: cleanRow["timestamp"] || "",
          teamName: cleanRow["team name"] || "",
          leader,
          members,
          problemStatement: {
            theme:
              cleanRow["mention you sih2025 problem statement theme"] || "",
            id:
              cleanRow["mention you sih2025 problem statement id (ps id)"] ||
              "",
            ppt:
              cleanRow[
                "upload your sih 2025 ppt in pdf format ( carefully note : only 6 slide are allowed)"
              ] || "",
          },
          status: cleanRow["status"] || "",
        };
      }
    );

    return formattedData;
  } catch (err) {
    console.error(err);
    return [];
  }
}
