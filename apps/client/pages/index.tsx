import dynamic from "next/dynamic";

// =======================================================

const Admin = dynamic(() => import("../react-admin/components/MyAdmin"), {
  ssr: false,
});

// =======================================================

const App = () => <Admin />;

// =======================================================

export default App;
