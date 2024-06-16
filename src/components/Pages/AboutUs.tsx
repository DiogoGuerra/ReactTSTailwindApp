const AboutUs = () => {
  return (
    <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md mx-auto mt-4">
      <h2 className="text-2xl font-bold my-4 text-center text-blue-400 border-b-2 border-blue-400 pb-2">
        About Us
      </h2>

      <div className="my-4">
        <h3 className="text-xl font-bold mb-2">Objective of the App</h3>
        <ul className="list-disc list-inside">
          <li>
            To display posts and comments fetched from the JSONPlaceholder API.
          </li>
          <li>
            To demonstrate how to perform CRUD operations (Create, Read, Update,
            Delete) using React and TypeScript.
          </li>
          <li>To showcase pagination of posts.</li>
        </ul>
      </div>

      <div className="my-4">
        <h3 className="text-xl font-bold mb-2">API Used</h3>
        <p>
          JSONPlaceholder API available at{" "}
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://jsonplaceholder.typicode.com/
          </a>
        </p>
      </div>

      <div className="my-4">
        <p className="italic text-gray-600">
          Please note that due to limitations of the JSONPlaceholder API:
        </p>
        <ul className="list-disc list-inside">
          <li>
            It is not possible to perform the PUT operation to edit new posts.
          </li>
          <li>
            Data modifications (create, update, delete) are not persisted when
            the app is refreshed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
