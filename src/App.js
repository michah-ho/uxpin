import { useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/styledComponents/MainContainer";
import ComponentsPreview from "./components/ComponentsPreview";
import Properties from "./components/Properties";

function App() {
  const [isDiscard, setIsDiscard] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="App">
      <Header setIsDiscard={setIsDiscard} setIsSaved={setIsSaved} />
      <MainContainer>
        <ComponentsPreview />
        <Properties
          isSaved={isSaved}
          setIsSaved={setIsSaved}
          isDiscard={isDiscard}
          setIsDiscard={setIsDiscard}
        />
      </MainContainer>
    </div>
  );
}

export default App;
