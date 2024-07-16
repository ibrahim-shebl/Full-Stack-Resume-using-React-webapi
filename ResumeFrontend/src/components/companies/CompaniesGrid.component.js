import "./companies-grid.css";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React from "react";
 


const column = [
   { field: "id", headerName: "ID", width: 100 },
   { field: "name", headerName: "Name", width: 200 },
   { field: "size", headerName: "Size", width: 150 },
   {
      field: "createdAt",
      headerName: "Creation Time",
      width: 200,
      renderCell: (params) => moment(params.row.createdAt).format("YYYY-MM-DD"),
   },
];

 

const CompaniesGrid = ({ data }) => {
   return (
      <Box sx={{ width: "100%", height: 450 }} className="companies-grid">
         <DataGrid rows={data} columns={column} getRowId={(row) => row.id} rowHeight={50} />
      </Box>
   );
};

export default CompaniesGrid;
