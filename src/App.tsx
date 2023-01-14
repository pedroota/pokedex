import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Router } from '~/routes/routes';
import { GlobalStyle } from './styles/global';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}
