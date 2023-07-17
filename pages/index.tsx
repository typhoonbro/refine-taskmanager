// import { WelcomePage } from "@refinedev/core";

// export default function Index() {
//   return <WelcomePage />;
// }
import { Container } from "@mui/material"
// Index.noLayout = true;
export default function Index(){
  return(
    <Container maxWidth="sm" 
   style={{ textAlign: "center",
    }}
    >
      <h1>Hello world!</h1>
    </Container>
    
  )
}