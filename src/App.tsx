// import { Button } from "./components/examples/button/Button";

import { Button } from "./components/radix/button/button";

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

          <div>
            <img
              alt="city"
              src="https://images.unsplash.com/photo-1697442066898-fa88f11693d6?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
