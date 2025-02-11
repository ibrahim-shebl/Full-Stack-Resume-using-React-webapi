import './candidates-grid.css';
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { baseUrl } from "../../constants/url.constants";
import { PictureAsPdf } from "@mui/icons-material";

const column = [
   { field: "id", headerName: "ID", width: 100 },
   { field: "firstName", headerName: "First Name", width: 120 },
   { field: "lastName", headerName: "Last Name", width: 120 },
   { field: "email", headerName: "Email", width: 150 },
   { field: "phone", headerName: "Phone", width: 150 },
   { field: "coverLetter", headerName: "C V", width: 500 },

   {
      field: "resumeUrl",
      headerName: "Download",
      width: 150,
      renderCell: (params) => (
         <a href={`${baseUrl}/Candidate/download/${params.row.resumeUrl}`} download>
            <PictureAsPdf />
         </a>
      ),
   },
];

 
const CandidatesGrid = ({ data }) => {
   return (
      <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
         <DataGrid rows={data} columns={column} getRowId={(row) => row.id} rowHeight={50} />
      </Box>
   );
};

export default CandidatesGrid;
