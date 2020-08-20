import { MouseEvent, useState, useEffect } from 'react';
import { 
  Heading,
  Grid,
  Flex,
  Button,
  Textarea,
  Box,
  Text,
  useToast,
  Skeleton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody
} from '@chakra-ui/core';
import Input from '../components/Input';
import webhook from 'webhook-discord';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [discord, setDiscord] = useState<string>();
  const [projectDescription, setProjectDescription] = useState<string>();
  const toast = useToast();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSendForm = async (e: MouseEvent) => {
    e.preventDefault();

    if(!name || !email || !discord || !projectDescription) return;

    const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/739939998371151953/XheFj0-_YHUrztatj5LugLhuHt2EsHfVXUS7n2ISGtvA2jYkG0-Vhouxvi2a_9gkaytr");
 
    const msg = new webhook.MessageBuilder()
                    .setName("Formulário")
                    .setColor("#48f")
                    .setDescription(`Name: ${name}\nEmail: ${email}\nDiscord: ${discord}\nDescrição do projeto: ${projectDescription}`);

    Hook.send(msg);

    toast({
      title: "Formulário enviado.",
      description: "Entraremos em contato em breve.",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 560px 520px 1fr"
      templateRows="1fr 70px 490px 1fr"
      templateAreas="
        '. . . .'
        '. logo tip .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img
          width="180px"
          style={{ borderRadius: "20em", margin: "0 auto" }}
          src="https://auradiscord.com/src/logo.png"
          alt="Aura"
        />

        <Heading
          size="lg"
          lineHeight="shorter"
          mt={16}
          width={500}
          textAlign="center"
        >
          Aura é um bot para servidores de Discord e que agora tem sua api própria e com funções que englobam Inteligencia Artificial, Stats de games, e mais!
        </Heading>
      </Flex>

      <Box
        gridArea="tip"
        textAlign="center"
        backgroundColor="purple.500"
        borderRadius={8}
        p={3}
        boxShadow="rgba(50, 50, 50, 0.72) 0px 5px 7px 0px"
      >
        <Heading size="sm" color="white">Aproveite é de graça!</Heading>
      </Box>

      <Flex 
        gridArea="form"
        height="100%"
        backgroundColor="white"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={10}
        boxShadow="rgba(50, 50, 50, 0.72) 0px 5px 7px 0px"
      >

        <Skeleton isLoaded={!loading} mt={2}>
          <Input
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </Skeleton>

        <Skeleton isLoaded={!loading} mt={2}>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Skeleton>

        <Skeleton isLoaded={!loading} mt={2}>
          <Input
            placeholder="Discord"
            onChange={(e) => setDiscord(e.target.value)}
          />
        </Skeleton>
        
        <Skeleton isLoaded={!loading} mt={2}>
          <Textarea
            height="6.2rem"
            backgroundColor="white"
            focusBorderColor="green.500"
            borderRadius="sm"
            placeholder="Fale sobre seu projeto"
            resize="none"
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </Skeleton>

        <Button
          backgroundColor="green.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'green.600' }}
          boxShadow="rgba(50, 50, 50, 0.72) 0px 5px 7px 0px"
          onClick={handleSendForm}
          color="white"
        >
          ENVIAR FOMULÁRIO
        </Button>

        <Skeleton isLoaded={!loading} mt={6}>
          <Text
            m="0 auto"
          >
            Ao enviar seu formulário você aceita os <span onClick={onOpen} style={{ cursor: "pointer", color: "black", fontWeight: 700 }}>Termos de Uso</span>
          </Text>
        </Skeleton>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Termos de Uso</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              1 - Você não tem permissão para abusar intencionalmente da API. 🌠 <br />
              2 - Você não tem permissão para compartilhar a sua chave em qualquer lugar. 🌠 <br />
              Se você estiver usando a API com comando, defina o cooldown, porque as pessoas podem realmente abusar e fazer com que você tome ratelimit. (esse sistema ainda está em desenvolvimento) 🌠 <br />
              3 - Se o seu bot é muito grande ou você possui 2 ou mais bots e deseja aumentar a taxa de ratelimit, você pode nos informar sobre isso. 🌠 <br />
              4 - Você DEVE mencionar que seu bot usa esta API em algum lugar no comando (não precisa ser um comando que use API, pode ser um comando INFO ou algo do tipo), se você não quiser, nos contate. 🌠
            </ModalBody>

            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Grid>
  )
}