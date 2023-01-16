import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Router } from '~/routes/routes';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from 'react-modal';

export function App() {
  const queryClient = new QueryClient();

  // Configs React Modal
  ReactModal.setAppElement('#root');

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </QueryClientProvider>
  );
}
