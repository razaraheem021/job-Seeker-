import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <StyledButton variant="contained">check</StyledButton>
    </>
  );
}

export default App;

const StyledButton = styled(Button)({
  flexGrow: 1,
  maxWidth: 400,
  backgroundColor: "#f00",
});
