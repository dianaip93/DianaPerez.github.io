import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import styled from "styled-components";
import { ArticleType } from "../../projectDetails";

const Article = styled(Flex)`
  padding: 3rem;

  flex-direction: column;
  align-items: center;

  border: 1px solid #eee;
  gap: 2rem;
  flex: 1 1 50%;
`;

const ArticleImageContainer = styled(Flex)`
  border: 1.5px solid #ccc;
  border-radius: 0.5rem;
  width: 100%;

  justify-content: center;
`;

const ArticleImage = styled.img`
  height: 20rem;
`;

const ArticlePreview = ({
  onClick,
  buttonText,
  href,
  superTitle,
  title,
  body,
  imageSrc,
}: ArticleType) => (
  <Article minWidth="30rem">
    <header>
      {superTitle && (
        <Heading
          as="h2"
          textAlign="center"
          textTransform="uppercase"
          fontWeight="black"
          margin=".5rem 0"
          fontSize="1.5rem"
        >
          {superTitle}
        </Heading>
      )}
      {href ? (
        <a target="_blank" href={href}>
          <Heading
            as="h3"
            fontWeight="bold"
            fontSize="1.25rem"
            textTransform="uppercase"
            textAlign="center"
          >
            {title}
          </Heading>
        </a>
      ) : (
        <Heading
          as="h3"
          fontWeight="bold"
          fontSize="1.25rem"
          textTransform="uppercase"
          textAlign="center"
        >
          {title}
        </Heading>
      )}
    </header>
    {imageSrc && (
      <ArticleImageContainer onClick={onClick}>
        <ArticleImage src={imageSrc} />
      </ArticleImageContainer>
    )}
    {body && <p>{body}</p>}
    <Spacer />
    {buttonText && (
      <Button
        borderColor="black"
        fontWeight="bold"
        padding="1.25rem 2rem"
        fontSize=".75rem"
        textTransform="uppercase"
        as={href ? "a" : undefined}
        variant="outline"
        onClick={onClick}
        target="_blank"
        href={href}
      >
        {buttonText}
      </Button>
    )}
  </Article>
);

export default ArticlePreview;
