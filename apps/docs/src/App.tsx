import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MarkdownViewer from './components/MarkdownViewer';

const DocPage = () => {
  const { app, section } = useParams<{ app: string; section: string }>();
  if (!app || !section) return <div>Not found</div>;

  return (
    <div className='flex h-screen'>
      <Sidebar app={app} />
      <MarkdownViewer app={app} section={section} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:app/:section'>
          <DocPage />
        </Route>
        <Route path='*'>
          <div className='p-10'>Select a document.</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
