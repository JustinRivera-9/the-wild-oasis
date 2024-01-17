import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabin, setCabin] = useState();
  useEffect(() => {
    getCabins().then((data) => setCabin(data[0]));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src={cabin.image} alt="cabin" />
    </Row>
  );
}

export default Cabins;
