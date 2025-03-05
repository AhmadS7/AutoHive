import Layout from "~/components/Layout";

    export default function Subscribe() {
      return (
        <Layout>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Subscribe to CarInfo</h1>
            <p className="text-lg mb-8">
              Get exclusive content, newsletters, and special offers.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Subscribe Now
            </button>
          </div>
        </Layout>
      );
    }
