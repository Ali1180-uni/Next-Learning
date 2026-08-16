import Card from "@/component/card";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <Card Title="My Card 1" Description="This is a simple card component." />
      <Card Title="My Card 2" Description="This is a simple card component." />
      <Card Title="My Card 3" Description="This is a simple card component." />
    </div>
  );
}
