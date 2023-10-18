// import { Button } from "./components/examples/button/Button";

import { Button } from "./components/radix/button";

function App() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Accessability Sandbox</h1>
      </main>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* <h2>Component Kitchensink</h2> */}
        <div className="grid gap-4 grid-cols-3 container place-items-center">
          {/* <Button primary label="Button" /> */}
          <Button size={"lg"} variant={"default"}>
            Hello
          </Button>
          <Button size={"lg"} variant={"link"}>
            Hello
          </Button>
          {/* <div className="h-20 w-20 bg-slate-600" />
          <div className="h-20 w-20 bg-slate-600" />
          <div className="h-20 w-20 bg-slate-600" /> */}
        </div>
      </div>
    </>
  );
}

export default App;
