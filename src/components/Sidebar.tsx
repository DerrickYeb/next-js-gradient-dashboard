import { Box, List, ListItem, Text } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react'
import { Settings } from '../assets/SidebarIcons';
import {BsChevronRight} from 'react-icons/bs'
import Link from 'next/link';
import { motion } from 'framer-motion';


interface SidebarProps{
    name:string;
    icon:any;
    component:any
}



const Sidebar = () => {
    const NavLinks =[
        {
            id:1,
            name:"Projects",
            className:"project"
        },
        {
            id:2,
            name:"Researchs",
            className:"research"
        },
        {
            id:3,
            name:"Movies",
            className:"movies"
        }
    ]
    const[selectedItem,setSelectedItem] = useState(NavLinks[0])


   

    return (
    <Box mx={4} px={6} py={10} position={"fixed"}>
            {/* <List variant="outline" spacing={3} w="full">
                {
                    NavLinks.map((item) =>(
                        <ListItem  key={item.id} bgSize={21} fontSize={20} my={2} color="secondary" 
                        as={"button"} py={4} 
                        cursor="pointer" 
                        className={`${item.name == item.className ? "#fff" : ""}`} 
                        fontWeight="bold"
                        pl={8} pr={16} display="flex" alignItems={"center"} borderRadius={4}>
                       
                        <Text bgClip={"text"} fontWeight={"extrabold"} border={"solid"} bgGradient={"linear(to-l, #ff4081, #ff4043,pink.500)"} cursor={"progress"} fontSize={30} ml={6}>{item.name}</Text>
                        </ListItem>
                    ))
                }
            </List> */}
           <Box as="nav" >
                <ul>
                    {NavLinks.map((item) =>(
                        <Fragment key={item.id}>
                            <Link href={""} passHref >
                                <Box as="li" className={"side-bar-item"}
                                onClick={() =>setSelectedItem(item)}>
                                    <Box as='div'
                                    py={8}
                                    px={4}
                                    ml={6}
                                    borderRadius={"full"}
                                    display={"flex"}
                                    cursor={"pointer"}
                                    alignItems={"center"}>
                                        <Text
                                        ml={8} 
                                        fontSize={18}
                                        zIndex={"docked"}
                                        fontWeight={"bold"}
                                        bgClip={"text"}
                                        bgGradient={"linear(to-l, #ff4081, #ff4043,pink.500)"}
                                        >
                                            {item.name}
                                        </Text>
                                    </Box>
                                    {selectedItem.name === item.name ? (
                                        <motion.div
                                        transition={{default:{ease:"linear"},duration:1}}
                                        layoutId={""}
                                        className={""}
                                         />
                                    ):null}
                                </Box>
                            </Link>
                        </Fragment>
                    ))}
                </ul>
           </Box>
    </Box>
  )
}

export default Sidebar