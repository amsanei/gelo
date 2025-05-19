import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Home />
      </Layout>
    </QueryClientProvider>
  );
}

function Furnitures() {
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10&skip=10");
    return await res.json();
  };
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
  if (isLoading) return <div>Wait...</div>;

  return (
    <div>
      {data.products.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
