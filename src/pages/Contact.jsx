import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5,ml:10,"& h4":{fontWeight:"bold",mb:2},"@media(max-width:600px)":{ml:2}}}>
        <Typography variant="h4">Contact My Restruant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum enim
          temporibus dolorum earum iusto amet vel nam! Totam cumque hic quam,
          officia repellat sint deleniti ad mollitia? Libero, labore optio?
        </p>
      </Box>
      <Box sx={{m:3,width:"600px",ml:10,mb:5,"@media(max-width:600px)":{width:"92%",ml:2}}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:"black",color:"white"}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{display:"flex",alignItems:"center"}}>
                  <SupportAgentIcon sx={{color:"red", mr:1}}/>
                  1800-000-000 (toolfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell sx={{display:"flex",alignItems:"center"}}>
                  <MailIcon sx={{color:"skyblue", mr:1}}/>
                  help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell sx={{display:"flex",alignItems:"center"}}>
                  <CallIcon sx={{color:"green", mr:1}}/>
                  1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
