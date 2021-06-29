import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  BreadcrumbLink,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: "block", md: "none" }}>
      <HamburgerIcon cursor="pointer" w={8} h={8} m="5" onClick={onOpen} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader fontSize="24px" borderBottomWidth="1px">
            Topics
          </DrawerHeader>
          <DrawerBody>
            <List>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/">
                  <BreadcrumbLink color="black">Home</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/business">
                  <BreadcrumbLink color="black">Business</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/technology">
                  <BreadcrumbLink color="black">Technology</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/fashion">
                  <BreadcrumbLink color="black">Fashion</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/politics">
                  <BreadcrumbLink color="black">Politics</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/entertainment">
                  <BreadcrumbLink color="black">Entertainment</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/sports">
                  <BreadcrumbLink color="black">Sports</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/current-affairs"
                >
                  <BreadcrumbLink color="black">Current Affairs</BreadcrumbLink>
                </NavLink>
              </ListItem>
              <ListItem m="4" onClick={onClose}>
                <NavLink style={{ textDecoration: "none" }} to="/economics">
                  <BreadcrumbLink color="black">Economics</BreadcrumbLink>
                </NavLink>
              </ListItem>
            </List>
          </DrawerBody>
          <Button colorScheme="blue" m="20" onClick={onClose}>
            close
          </Button>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
