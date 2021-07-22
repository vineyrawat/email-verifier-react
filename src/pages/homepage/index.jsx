import React from "react";
import EmailInput from "./components/email-input";
import Header from "./components/header";
import { Container } from "./styles";
import ErrorHolder from "./components/error-holder";
import emailService from "../../services/emailService";
import Details from "./components/details";

function HomePage() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(null);
    const email = e.target.email.value;
    if (email === "") return setError("Email is required");
    setLoading(true);
    const [serviceData, serviceError] = await emailService.verify(email);
    setLoading(false);
    if (serviceError) return setError(serviceError.message);
    setError(null);
    setData(serviceData.data.data);
  };

  return (
    <>
      <Container>
        <Header />
        <EmailInput loading={loading} onSubmit={handleSubmit} />
        {error && <ErrorHolder error={error} />}
        {data && <Details data={data} />}
      </Container>
    </>
  );
}

export default HomePage;
