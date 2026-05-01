import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Directory from './components/Directory';
import Programs from './components/Programs';
import Insights from './components/Insights';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="directory" element={<Directory />} />
          <Route path="programs" element={<Programs />} />
          <Route path="insights" element={<Insights />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="team" element={<Team />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
