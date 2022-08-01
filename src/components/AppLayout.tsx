import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { Children } from 'react'
import HeaderBar from './HeaderBar/HeaderBar'
import Sidebar from './Sidebar'

const AppLayout = ({children}:any) => {
  return (
    <Grid 
    templateAreas={`"header header"
    "nav main"
    "nav footer"`}
    gridTemplateColumns={"340px 1fr"}
    gridTemplateRows={"70px 1fr 30px"}
    fontWeight="bold"
    color={"blackAlpha.700"}
    h="100vh">
        <GridItem bg={"primary"} bgGradient={"linear(to-r, #000 25%, #ff4043 50%,#000 25%,pink.500,#000)"} area={"header"}>
            <HeaderBar />
        </GridItem>
        <GridItem bg="primary" area={"nav"}>
            <Sidebar/>
        </GridItem>
        <GridItem bg={"primary"} area={"main"}>
            <Box as='main'>
                {children}
            </Box>
        </GridItem>
        <GridItem bg="primary" area={"footer"}>

        </GridItem>
    </Grid>
  )
}

export default AppLayout