import { Navbar } from "@components/navbar";
import { optionsProfileDropdown, optionsLinkLabel } from "./configs/mock";

function App() {
  return (
    <>
      <Navbar
        altText="profile-img"
        fallBackText="AP"
        linkLabels={optionsLinkLabel}
        options={optionsProfileDropdown}
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <p className="text-red-500">something</p>
    </>
  );
}

export default App;
