import React from "react";
import './Breadcrumbs.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
const Breadcrumbss = () => {
    const handleClick = () => {

    }
  return (
    <div className='line'>
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
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumbss;
