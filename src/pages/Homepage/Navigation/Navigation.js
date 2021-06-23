import React from "react";
import { NavLink } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
} from "@chakra-ui/react";
const Navigation = () => {
  return (
    <Breadcrumb h="48" padding="10" bg="tomato">
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

      <Input
        type="text"
        placeholder="search news"
        height="20px"
        w="300px"
        float="right"
        p="6"
        mt="-8"
        border="0px solid"
        borderRadius="5px"
      />
    </Breadcrumb>
  );
};

export default Navigation;
