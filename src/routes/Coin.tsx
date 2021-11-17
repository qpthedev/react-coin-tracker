import { useParams } from "react-router";

interface RouteParams {
  coinID: string;
}

function Coin() {
  const { coinID } = useParams<RouteParams>();
  return <h1>Coin: {coinID}</h1>;
}

export default Coin;
