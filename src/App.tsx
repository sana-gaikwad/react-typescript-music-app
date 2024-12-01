import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterWrapper } from "@/route"
import { Layout } from "@/components"

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
