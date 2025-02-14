import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./assets/contexts/GlobalContext";

import DefaultLayout from "./assets/layouts/DefaultLayout";
import HomePage from "./assets/pages/HomePage";
import BeersPage from "./assets/pages/BeersPage";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="beers" element={<BeersPage />} />
              {/* <Route path="beers/:id" element={<BeerShowPage />} /> */}
              {/* <Route path="beers/add" element={<NewBeerPage />} /> */}
              {/* <Route path="breweries/add" element={<NewBreweryPage />} /> */}
              {/* <Route path="styles/add" element={<NewStylePage />} /> */}
            </Route>

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
