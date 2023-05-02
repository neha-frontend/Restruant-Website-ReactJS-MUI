import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MenuList } from "../data/data";
import "../styles/MenuStyles.css";
const Menu = () => {
  const [searchValue,setSearchValue] = useState("");
  const [menuList , setMenuList] =  useState(MenuList);
  return (
    <Layout>
      <Grid container>
        <Grid item xs={6}>
          <div className="search_widgets">
            <input
              type="text"
              placeholder="I'm looking for...."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchIcon />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        {menuList.filter((item)=>{
          if (searchValue.value==="") return item;
          if (item.name.toLowerCase().includes(searchValue.toLowerCase())) return item;
        }).map((item)=>(
         <Grid item lg={3} md={4} sm={6}>
           <Card sx={{m: 2 }}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "280px" }}
              component={"img"}
              src={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>
                {item.name}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
         </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Menu;
