import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
 
export function Example() {
  const [openTop, setOpenTop] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const [openBottom, setOpenBottom] = React.useState(false);
  const [openLeft, setOpenLeft] = React.useState(false);
 
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
 
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        {/* <Button onClick={openDrawerTop}>Open Drawer Top</Button>
        <Button onClick={openDrawerRight}>Open Drawer Right</Button> */}
        <label onClick={openDrawerBottom}>SORT</label>
        {/* <Button onClick={openDrawerLeft}>Open Drawer Left</Button> */}
      </div>
      {/* <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Drawer on Top
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Drawer on Right
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer> */}
      <Drawer
        // placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 shadow-lg border h-[50vh] w-full bg-[#FFEDD6]"
      >
        <div className="mb-6 flex flex-col justify-between gap-3">
          <div className="flex justify-between items-center">
          <Typography variant="h6" className="text-black">
            Sort By
          </Typography>
          <IconButton
            variant="text"
            className="text-black flex items-center"
            onClick={closeDrawerBottom}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
          </div>
          <hr className="bg-gray-300 border w-full"></hr>
          <div className="text-black text-base flex justify-between px-3">
            <label>What's New</label>
            <input type="radio"></input>
          </div>
          <div className="text-black text-base flex justify-between px-3">
            <label>Popular</label>
            <input type="radio"></input>
          </div>
          <div className="text-black text-base flex justify-between px-3">
            <label>Price Low To High</label>
            <input type="radio"></input>
          </div>
          <div className="text-black text-base flex justify-between px-3">
            <label>Price High To Low</label>
            <input type="radio"></input>
          </div>
          <div className="text-black text-base flex justify-between px-3">
            <label>Discount</label>
            <input type="radio"></input>
          </div>
          
        </div>
      </Drawer>
      <Drawer
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Drawer on LefopenLeft
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerLeft}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
export default Example