import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import GatedContentEdit, {
  Condition,
  GatedContent,
  Rule,
} from "./GatedContentEdit";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IconBack } from "./assets/icon_back.svg";
import { useCallback, useState } from "react";
import axios from "axios";
import { TokenType } from "./consts";

export default function NewGatedContent() {
  const navigate = useNavigate();
  const handleBack = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const [gatedContent, setGatedContent] = useState({
    name: "",
    description: "",
    route: "",
    condition: Condition.SOME,
    rules: [] as Rule[],
  } as GatedContent);

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = {
      organization: "developer_dao",
      meetAllConditions: gatedContent.condition === Condition.ALL,
      gateType: "Web Page",
      gateId: gatedContent.route,
      description: gatedContent.description,
      conditions: gatedContent.rules.map((rule) => ({
        chainId: 1,
        contractAddress: rule.digitalAsset?.address,
        contractType:
          rule.digitalAsset?.type === TokenType.NFT ? "ERC721" : "ERC20",
        amount: 1,
      })),
    };
    await axios.post("https://gato-api-server.herokuapp.com/rules", data);
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconBack onClick={handleBack} />
            <Container component="div" sx={{ flexGrow: 1 }} />
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            paddingLeft: "184px",
            paddingTop: "116px",
            paddingRight: "184px",
          }}
        >
          <GatedContentEdit
            gatedContent={gatedContent}
            setGatedContent={setGatedContent}
          />
        </Box>
      </Box>
    </form>
  );
}
