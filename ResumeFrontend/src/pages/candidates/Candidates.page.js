import { useEffect, useState } from "react";
import "./candidates.css";
import httpModule from "../../helpers/http.module";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CandidatesGrid from "../../components/candidates/CandidatesGrid.component";

const Candidates = () => {
   const [candidates, setCandidates] = useState([]);
   const [loading, setLoading] = useState(false);
   const redirect = useNavigate();

   useEffect(() => {
      setLoading(true);
      httpModule
         .get("/Candidate/Get")
         .then((response) => {
            setCandidates(response.data);
            setLoading(false);
         })
         .catch((error) => {
            alert("Error");
            console.log(error);
            setLoading(false);
         });
   }, []);

   return (
      <div className="content candidates">
         <div className="heading">
            <h2>Candidates</h2>
            <Button variant="outlined" onClick={() => redirect("/candidates/add")}>
               <Add />
            </Button>
         </div>
         {loading ? (
            <CircularProgress size={100} />
         ) : candidates.length === 0 ? (
            <h1>No Candidate</h1>
         ) : (
            <CandidatesGrid data={candidates} />
         )}
      </div>
   );
};

export default Candidates;
