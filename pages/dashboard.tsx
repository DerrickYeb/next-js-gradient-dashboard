import { Badge, Box, Img, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'


export const Testimonial = ()=>{
  return(
    <Box mt={32} alignItems={"center"} border={"1px solid"} borderColor={"red.300"} py={20} color={"white"}>
       <Text maxW={"800px"} fontSize={"2xl"} textAlign={"center"}>
          Hello Everyone
       </Text>
       <Text fontSize={"3xl"} textAlign={"center"}>
          This is a dashboard that displays the number of users, posts, and comments.
       </Text>
       <Text mt={5} fontSize={"lg"}>
          Derrick
       </Text>
      </Box>
  )
}

const Dashboard = () => {

  const Profiles = [
    {
      id:1,
      name: 'Derrick',
      image: 'https://images.unsplash.com/photo-1659085095693-fcdc650d246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      status: 'Active',
      role: 'Admin',
      location: 'Lagos',
    },
    {
      id:2,
      name: 'Bismark',
      image: 'https://images.unsplash.com/photo-1659085095693-fcdc650d246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      status: 'Active',
      role: 'Admin',
      location: 'Accra',
    },
    {
      id:2,
      name: 'Oluwaseun',
      image: 'https://images.unsplash.com/photo-1593642647963-b9e4b4d8a9b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      status: 'Active',
      role: 'Admin',
      location: 'Lagos',
    },
    {
      id:3,
      name: 'Oluweun',
      image: 'https://images.unsplash.com/photo-1593642647963-b9e4b4d8a9b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      status: 'Active',
      role: 'Admin',
      location: 'Lagos',
    },
    {
      id:4,
      name: 'Obasanjo',
      image: 'https://images.unsplash.com/photo-1593642647963-b9e4b4d8a9b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      status: 'Active',
      role: 'Admin',
      location: 'Lagos',
    }
  ]

  return (
      <SimpleGrid
      color={"white"}
      bg={"blackAlpha.500"}
      columns={{sm:1, md:2, lg:3}}
      >
        {Profiles.map(profile =>(
          <Box key={profile.id} borderRadius={"lg"} gap={3} border={"2px solid"} borderColor={"tomato"}  m={5} boxShadow={"xl"}> 
          <Box w={"100%"} h={"200px"} pr={0} pl={0}>
          <Img src={profile.image} h={40} alignContent={"center"}  py={8} bg={"gray"} borderRadius={50} borderColor={"tomato"} />
          </Box>          
          <Box p={8}>
            <Text fontSize={18} color={"white"}>
              The little things in life are always worth fighting for.
            </Text>
            <Text fontSize={18} bgGradient={"linear(to-r,#7928CA, #FF0080)"}>
              {profile.name}
                         </Text>
            <Badge bg={"inherit"} fontSize={18}><Text fontSize={18} bgClip={"text"} bgGradient={'linear(to-r,#7928CA, #FF0080)'}>
          {profile.role}
          </Text>
          </Badge>
          <Badge bgColor={"inherit"} bgClip={"text"} fontSize={18} bgGradient={"linear(to-r,#7928CA, #FF0080)"}>{profile.location}</Badge>
          </Box>
         
        </Box>
        ))}
      </SimpleGrid>
  )
}
export default Dashboard;