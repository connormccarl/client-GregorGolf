import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.NODE_ENV == 'PRODUCTION'
  ? `https://${process.env.PUBLIC_URL}`
  : 'http://localhost:3001';
  
  export const PasswordResetEmail = ({
    firstName,
    link,
  }) => {
    return (
      <Html>
        <Head />
        <Preview>Gregor Golf reset your password</Preview>
        <Body style={main}>
          <Container style={container}>
            <Img
              src={`${baseUrl}/text_logo_white.webp`}
              width="40"
              height="33"
              alt="Gregor Golf"
            />
            <Section>
              <Text style={text}>Hi {firstName},</Text>
              <Text style={text}>
                Someone recently requested a password change for your Gregor Golf
                account. If this was you, you can set a new password here:
              </Text>
              <Button style={button} href={link}>
                Reset password
              </Button>
              <Text style={text}>
                If you don&apos;t want to change your password or didn&apos;t
                request this, just ignore and delete this message.
              </Text>
              <Text style={text}>
                To keep your account secure, please don&apos;t forward this email
                to anyone.
              </Text>
              <Text style={text}>Happy Golfing!</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "45px",
  };
  
  const text = {
    fontSize: "16px",
    fontFamily:
      "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
  };
  
  const button = {
    backgroundColor: "#007ee6",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "210px",
    padding: "14px 7px",
  };