import { Box, Img } from '@chakra-ui/react'
import React from 'react'



const Card = ({children}:any) => {
  return (
    <Box borderRadius={3} py={20} pl={4} display={"flex"}>
        <Box borderColor={"pink.500"} borderRadius={50} display={"flex"} pb={30} pt={5} alignItems={"center"}>
            <Img src='' alt="use image here"/>
        </Box>
        {children}
    </Box>
  )
}

export default Card