import { Select } from "../";

export default function App() {
  return (
    <div>
      This is here for you to be able to test components during development. For
      example:
      <Select
        onSearchChange={() => { }}
        options={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        setValue={() => { }}
        value={null}
      />
    </div>
  );
}
