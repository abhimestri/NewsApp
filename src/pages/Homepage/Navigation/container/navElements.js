import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const NavElements = () => {
  return (
    <React.Fragment>
      <Breadcrumb display={{ base: "none", md: "block" }} margin="10">
        <BreadcrumbItem>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <BreadcrumbLink color="black">Home</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NavLink style={{ textDecoration: "none" }} to="/business">
            <BreadcrumbLink color="black">Business</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <NavLink style={{ textDecoration: "none" }} to="/technology">
            <BreadcrumbLink color="black">Technology</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <NavLink style={{ textDecoration: "none" }} to="/fashion">
            <BreadcrumbLink color="black">Fashion</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NavLink style={{ textDecoration: "none" }} to="/politics">
            <BreadcrumbLink color="black">Politics</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <NavLink style={{ textDecoration: "none" }} to="/entertainment">
            <BreadcrumbLink color="black">Entertainment</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <NavLink style={{ textDecoration: "none" }} to="/sports">
            <BreadcrumbLink color="black">Sports</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NavLink style={{ textDecoration: "none" }} to="/current-affairs">
            <BreadcrumbLink color="black">Current Affairs</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <NavLink style={{ textDecoration: "none" }} to="/economics">
            <BreadcrumbLink color="black">Economics</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  );
};
