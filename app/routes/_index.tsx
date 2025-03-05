import { Link } from "@remix-run/react";
    import Layout from "~/components/Layout";

    export default function Index() {
      return (
        <Layout>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to CarInfo</h1>
            <p className="text-lg mb-8">Your one-stop destination for car information, reviews, and comparisons.</p>
            <div className="space-x-4">
              <Link to="/cars" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Browse Cars
              </Link>
              <Link to="/reviews" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Read Reviews
              </Link>
              <Link to="/compare" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Compare Cars
              </Link>
            </div>
          </div>
        </Layout>
      );
    }
