import xlsx, { IJsonSheet } from "json-as-xlsx";
import { data } from "@/app/admin/(main)/(After Trek)/mailinglist/page";

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      
      sheet: "mailingList",
      columns: [
        { label: "Name", value: "name" },
        { label: "Email", value: "email" },
        {
          label: "Date",
          value: (row) => new Date(row.date).toLocaleDateString(),
        },
      ],
      content: data,
    },
  ];

  let settings = {
    fileName: "Mailing List",
  };

  xlsx(columns, settings);
}