const App = `import {Select, SelectItem} from "@nextui-org/react";

const generateItems = (n) => {
  const items = [
    "Cat",
    "Dog",
    "Elephant",
    "Lion",
    "Tiger",
    "Giraffe",
    "Dolphin",
    "Penguin",
    "Zebra",
    "Shark",
    "Whale",
    "Otter",
    "Crocodile",
  ];

  const dataset = [];

  for (let i = 0; i < n; i++) {
    const item = items[i % items.length];

    dataset.push({
      label: \`\${item}\${i}\`,
      value: \`\${item.toLowerCase()}\${i}\`,
      description: "Sample description",
    });
  }

  return dataset;
};

export default function App() {
  const items = generateItems(1000);

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label={"Select from 10000 items"} isVirtualized placeholder="Select...">
        {items.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
