'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function QueryProvider({ children }) {
  const [client] = useState(new QueryClient());

  return <QueryClientProvider client={client}>
    
    
     <Toaster position="top-right" reverseOrder={false} />
    {children}
  
  
  </QueryClientProvider>;
}
