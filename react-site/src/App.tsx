import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import ArticlePreview from "./components/ArticlePreview";
import Icon from "@mdi/react";
import { mdiFileDocument, mdiGithub, mdiLinkedin } from "@mdi/js";
import Resume from "./components/Resume";
import { ProjectNames, projectDetails } from "../projectDetails";

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  border-collapse: collapse;
`;

enum PageNames {
  Projects,
  Resume,
}

const App = () => {
  const [openedProject, setOpenProject] = useState<ProjectNames>();
  const [page, setPage] = useState<PageNames>(PageNames.Projects);

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        padding="4rem 4vw 4rem"
        width="100%"
      >
        <Flex
          flexDirection="column"
          maxWidth="80rem"
          width="100%"
          id="wrapper"
          className="fade-in"
          gap="10rem"
        >
          <Flex gap=".5rem" alignItems="center" justifyContent="flex-end">
            <Spacer />
            <Button
              leftIcon={<Icon path={mdiFileDocument} size="1rem" />}
              colorScheme={page === PageNames.Resume ? "white" : undefined}
              color="white"
              onClick={() => setPage(PageNames.Resume)}
              variant="ghost"
              _hover={{ color: "blue.400", backgroundColor: "white" }}
            >
              Resume
            </Button>

            <Box mx=".5rem" borderRight="1px solid #ccc" alignSelf="stretch" />

            <IconButton
              color="white"
              icon={<Icon path={mdiLinkedin} size="1.25rem" />}
              aria-label="LinkedIn"
              variant="ghost"
              target="_blank"
              as="a"
              href="https://www.linkedin.com/in/dianapp/"
            />
            <IconButton
              color="white"
              icon={<Icon path={mdiGithub} size="1.25rem" />}
              aria-label="GitHub"
              variant="ghost"
              target="_blank"
              as="a"
              href="https://github.com/dianaip93"
            />
          </Flex>
          <Flex
            color="white"
            gap="2rem"
            flexDirection="column"
            id="intro"
            alignItems="center"
            textAlign="center"
          >
            <Heading
              fontSize="4rem"
              fontWeight="black"
              lineHeight="1"
              margin="0"
              textTransform="uppercase"
            >
              Diana Perez Portfolio
            </Heading>
            <Text fontStyle="italic">
              Data analyst with a strong foundation in SQL and Tableau, I
              specialize in transforming raw data into actionable insights that
              drive decision-making. Leveraging my background in operations and
              marketing, I bring a unique perspective to uncovering trends and
              optimizing processes.
            </Text>
          </Flex>

          <Card>
            <CardBody padding="0">
              <Section className="posts">
                {Object.entries(projectDetails).map(
                  ([
                    key,
                    { superTitle, title, buttonText, imageSrc, body },
                  ]) => (
                    <ArticlePreview
                      superTitle={superTitle}
                      title={title}
                      buttonText={buttonText}
                      // @ts-expect-error shrug
                      onClick={() => setOpenProject(key as ProjectNames)}
                      imageSrc={imageSrc}
                      body={body}
                    />
                  )
                )}
              </Section>
            </CardBody>
            <CardFooter padding="2rem">
              <Section
                className="contact"
                style={{ display: "flex", gap: "5rem" }}
              >
                <Flex
                  justifyContent="space-between"
                  flexFlow="column nowrap"
                  gap=".5rem"
                >
                  <Heading fontSize="1.25rem" textTransform="uppercase">
                    Location
                  </Heading>
                  <Text paddingBottom=".5rem" fontWeight="500">
                    Dallas, TX
                  </Text>
                </Flex>

                <Flex
                  justifyContent="space-between"
                  flexFlow="column nowrap"
                  gap=".5rem"
                >
                  <Heading fontSize="1.25rem" textTransform="uppercase">
                    Contact
                  </Heading>
                  <Text paddingBottom=".5rem">
                    <a target="_blank" href="mailto:dianaip93@gmail.com">
                      dianaip93@gmail.com
                    </a>
                  </Text>
                </Flex>

                <Flex
                  justifyContent="space-between"
                  flexFlow="column nowrap"
                  gap=".5rem"
                >
                  <Heading fontSize="1.25rem" textTransform="uppercase">
                    Links
                  </Heading>
                  <Flex gap=".5rem">
                    <IconButton
                      icon={<Icon path={mdiLinkedin} size="1.25rem" />}
                      aria-label="LinkedIn"
                      variant="ghost"
                      target="_blank"
                      as="a"
                      href="https://www.linkedin.com/in/dianapp/"
                    />
                    <IconButton
                      icon={<Icon path={mdiGithub} size="1.25rem" />}
                      aria-label="GitHub"
                      variant="ghost"
                      target="_blank"
                      as="a"
                      href="https://github.com/dianaip93"
                    />
                  </Flex>
                </Flex>
              </Section>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>

      <Modal
        size="xl"
        isOpen={page === PageNames.Resume}
        onClose={() => {
          setPage(PageNames.Projects);
        }}
      >
        <ModalOverlay backdropFilter="blur(.5rem)" />
        <ModalContent width="90%" maxWidth="calc(8.5in + 144pt)">
          <ModalCloseButton />
          <ModalHeader>Resume</ModalHeader>
          <ModalBody>
            <Resume />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={openedProject !== undefined}
        size="xl"
        onClose={() => {
          setOpenProject(undefined);
        }}
      >
        <ModalOverlay backdropFilter="blur(.5rem)" />
        {openedProject !== undefined && (
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>
              {projectDetails[openedProject].superTitle}
              <Text fontSize="1rem">{projectDetails[openedProject].title}</Text>
            </ModalHeader>
            <ModalBody padding="0">
              <Section>
                {projectDetails[openedProject].sections.map((sect) => (
                  <ArticlePreview {...sect} />
                ))}
              </Section>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default App;
