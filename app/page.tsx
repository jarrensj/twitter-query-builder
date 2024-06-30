import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold text-center">
        twitter query builder
      </h1>
      <p className="text-center">
        A tool to help you search for tweets on Twitter.
      </p>
    </main>
  );
}
