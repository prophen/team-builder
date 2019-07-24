import React from "react";
import  memberData from '../memberData'
import { Box, Card, Image, Heading, } from 'rebass'

function MemberCard() {
  console.log(memberData[0].email)
  
  return (
    <>
      <Box width={200}>
        <Card p={1} borderRadius={2} bg="#f6f6f6">
          <Image borderRadius={2} src={memberData[0].img} />
          <Box px={2}>
            <Heading as="h2">{memberData[0].name}</Heading>
            <p>Role: {memberData[0].role}</p>
            <p>Email:{memberData[0].email}</p>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default MemberCard;
