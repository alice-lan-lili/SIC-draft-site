import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Directory from './components/Directory';
import Programs from './components/Programs';
import Insights from './components/Insights';
import Sponsors from './components/Sponsors';
import Team from './components/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="directory" element={
            <div style={{ paddingTop: '100px' }}><Directory /></div>
          } />
          <Route path="programs" element={
            <div style={{ paddingTop: '100px' }}><Programs /></div>
          } />
          <Route path="insights" element={
            <div style={{ paddingTop: '100px' }}><Insights /></div>
          } />
          <Route path="sponsors" element={
            <div style={{ paddingTop: '100px' }}><Sponsors /></div>
          } />
          <Route path="team" element={
            <div style={{ paddingTop: '100px' }}><Team /></div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
