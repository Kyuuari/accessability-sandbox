export default {
  title: "button",
};

export const Accessible = () => (
  <button className="h-4 w-6 bg-black text-white">Accessible button</button>
);

export const Inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);
