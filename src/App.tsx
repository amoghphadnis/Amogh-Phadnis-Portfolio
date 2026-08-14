import { useState, useMemo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material';
import { createAppTheme } from './theme/theme';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PersonJsonLd, WebsiteJsonLd } from './components/common/StructuredData';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Showcase } from './pages/Showcase';
import { Minimal } from './pages/Minimal';
import { ProjectCaseStudy } from './pages/ProjectCaseStudy';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = useMemo(() => createAppTheme(darkMode ? 'dark' : 'light'), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <HashRouter>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            transition: `background-color 300ms ease, color 300ms ease`,
          }}
        >
          <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode((prev) => !prev)} />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/minimal" element={<Minimal />} />
              <Route path="/projects/:projectId" element={<ProjectCaseStudy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App
