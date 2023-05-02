import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:"center",p:2,"& h4":{fontWeight:"bold",my:2,fontSize:"2rem"},"& p":{textAlign:"justify"},"@media(max-width:600px)":{mt:0,"& h4":{fontSize:"1.5rem"}}}}>
        <Typography variant="h4">Welcome To My Restruant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          aperiam quisquam nemo similique fugiat. Neque, nam quos optio iste
          excepturi explicabo quidem. Aliquid ratione reprehenderit deserunt non
          beatae voluptates possimus animi earum perferendis est perspiciatis,
          aperiam distinctio quod impedit hic. Eligendi totam minima id quasi
          quis! Vel qui aspernatur culpa aperiam, animi deserunt atque
          asperiores quia. Illum ipsum iste qui doloribus ex unde vero
          necessitatibus praesentium. Cumque magni ratione, doloremque eos ipsam
          facere itaque placeat sed voluptas. Incidunt, soluta ducimus,
          necessitatibus perferendis fugit magnam aliquam ex eius doloremque
          adipisci natus asperiores voluptatum? Sint perspiciatis sit tempora
          illo laborum, itaque maiores.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae
          mollitia, maxime in amet labore? Dolorum dicta expedita magnam minus
          officia, ipsa consequatur ab! Aliquid corrupti alias incidunt vitae
          ipsa? Vero deserunt quasi illo deleniti molestiae minima nulla nam
          delectus distinctio nobis asperiores expedita, commodi assumenda sunt
          provident minus voluptatem dignissimos tempora nemo laborum dolorem
          accusantium! Porro ad dignissimos sequi quidem earum vitae rerum
          perspiciatis quasi delectus fugit eaque cumque, voluptatum rem maiores
          et molestiae totam atque unde nobis quam repellendus, laborum
          laboriosam impedit debitis? Iure, iste aliquam libero voluptates ex
          facilis et eligendi nihil repudiandae magni voluptate aut consequatur.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
