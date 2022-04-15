import React from "react";
import Footer from "./components/Footer";
import GetJobs from "./components/GetJobs";
import Header from "./components/Header";
import PostForm from "./components/PostForm";

function App() {
  return (
    <>
      <Header />
      <hr />
      <GetJobs />
      <PostForm />
      <Footer />
    </>
  );
}

export default App;
