import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
    const handleClick = () => {

    }
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
         Home
        </Link>
        <Link
          color="inherit"
          href="/clothing"
          onClick={handleClick}
        >
          Clothing
        </Link>
        <Link
          color="inherit"
          href="/clothing/mens-clothing"
          onClick={handleClick}
        >
         Mens Clothing
        </Link>
        {/* <Typography color="textPrimary">All Mens Clothing</Typography> */}
      </Breadcrumbs>
    </>
  );
};

export default Breadcrumbs;
