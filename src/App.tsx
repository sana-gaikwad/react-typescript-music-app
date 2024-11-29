import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Music Festival Directory</h1>
        <p className="text-lg text-gray-600">
          A modern starter kit with TypeScript, ESLint, Prettier, and Husky pre-commit hooks.
        </p>
      </div>
    </Layout>
  );
}

export default App;
