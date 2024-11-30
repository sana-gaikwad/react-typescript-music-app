import { Layout } from "./components/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterWrapper } from "./route"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterWrapper />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
