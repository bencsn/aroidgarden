import { addSpecimen } from "./actions";
import Button from "./components/common/Button";
import Input from "./components/common/Input";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="mb-6">Add a new plant</h1>

      <form
        action={addSpecimen}
        className="flex gap-6 flex-col justify-start max-w-3xl"
      >
        <Input label={"Genus"} placeholder={"Anthurium"} id={"genus"} />
        <Input label={"Species"} placeholder={"warocqueanum"} id={"species"} />
        <Input
          label={"Passcode"}
          placeholder={"xxxxxx"}
          id={"passcode"}
          hint={"I will probably build proper authentication later 😅"}
        />
        <Button>
          <span>Add</span>
        </Button>
      </form>
    </main>
  );
}
