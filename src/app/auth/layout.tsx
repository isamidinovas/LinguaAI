import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased flex justify-center items-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
