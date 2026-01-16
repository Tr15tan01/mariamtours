export const metadata = {
  title: "About Us - Mari Tours",
  description: "Learn more about Mari Tours and our mission",
};

const AboutPage = () => {
  // Server-side variables
  const serverVars = {
    TEST_ONE: process.env.TEST_ONE,
    BACKEND_SECRET_VAR: process.env.BACKEND_SECRET_VAR,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_FRONTEND_VAR: process.env.NEXT_PUBLIC_FRONTEND_VAR,
  };
  0;
  console.log("Server-side env vars:", serverVars);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6 text-gradient">
        Environment Variables Test
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-blue-600">
            Server-side Variables
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded">
              <div className="font-medium">TEST_ONE:</div>
              <code className="text-sm text-blue-700">
                {process.env.TEST_ONE || "Not set"}
              </code>
            </div>

            <div className="p-4 bg-green-50 rounded">
              <div className="font-medium">BACKEND_SECRET_VAR:</div>
              <code className="text-sm text-green-700">
                {process.env.BACKEND_SECRET_VAR || "Not set"}
              </code>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-purple-600">
            Frontend Variables (will be replaced at build time)
          </h2>
          <div className="p-4 bg-purple-50 rounded">
            <div className="font-medium">NEXT_PUBLIC_FRONTEND_VAR:</div>
            <code className="text-sm text-purple-700">
              {process.env.NEXT_PUBLIC_FRONTEND_VAR || "Not set"}
            </code>
            <p className="text-sm text-gray-600 mt-2">
              This value is injected at build time and will be the same on
              client and server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
