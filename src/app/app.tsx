import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";

import { setupStore } from "src/shared/store";

import { MainPage, Page404 } from "src/pages";

import "src/shared/styles/global.scss";

const App = () => (
  <div className="app">
    <Provider store={setupStore()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
