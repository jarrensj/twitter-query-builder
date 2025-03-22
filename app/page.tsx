import Form from "../components/Form";
import Form2 from "../components/Form2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold text-center">
        twitter query builder tool
      </h1>
      <p className="text-center">
        A tool to help you search for tweets on Twitter.
      </p>
      <Form />
      <Form2 />
    </main>
  );
}
