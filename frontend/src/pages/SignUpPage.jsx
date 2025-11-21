import { Box, Button, Input, VStack, Heading, useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function SignUpPage() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e)=>{
    e.preventDefault();
    toast({
      title:"Signed up (demo)",
      description:`Welcome, ${name}!`,
      status:"success",
      duration:3000,
      isClosable:true
    });
    setName(""); setEmail(""); setPassword("");
  };

  return (
    <Box p={6} maxW="400px" mx="auto">
      <Heading mb={4}>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3}>
          <Input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required/>
          <Input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <Input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <Button type="submit" colorScheme="blue" w="full">Sign Up</Button>
        </VStack>
      </form>
    </Box>
  );
}
