import { Box, Button, Icon, MenuIcon, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const HeaderBar = () => {
  return (
    <Box px={20} py={4} color="#fff" position={"fixed"} w="full">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display={"flex"} alignItems={"center"} cursor={'pointer'}>
        </Box>
        <Box>
          <Stack spacing={8} direction="row" align="center">
          <Button  size="sm" variant="outline">
            Notification
          </Button>
          <Button size="sm" variant="outline">User</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderBar