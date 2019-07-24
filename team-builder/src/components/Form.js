import React, { useState } from "react";
import { Button, Box, Flex } from "rebass";

function Form() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    img: "",
    role: ""
  });

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ ...member });
  };

  return (
    <Box mx='auto'>
      {console.log(member)}
      <form onSubmit={event => handleSubmit(event)}>
     
        <Flex justifyContent={'center'}>
        <Box width={'auto'} m='auto' >
        <Flex flexDirection={"column"} alignItems={"flex-start"}>
          <label>
            Name: 
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={event => handleChange(event)}
            />
          </label>
          <label>
            Email: 
            <input
              type="text"
              name="email"
              value={member.email}
              onChange={event => handleChange(event)}
            />
          </label>
          <label>
            Role: 
            <input
              type="text"
              name="role"
              value={member.role}
              onChange={event => handleChange(event)}
            />
          </label>
          </Flex>
          </Box>
          
          </Flex>
          <Button alignSelf={'center'}>Submit!</Button>
        
      </form>
    </Box>
  );
}

export default Form;
