import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {

    useTitle('Blogs');

  return (
    <div>
      <div className="text-center">
        <h1 className="rounded-md text-3xl p-2 mt-3 font-bold inline-block bg-orange-100 text-black">
          Question/Answers page
        </h1>
      </div>

      <div className="p-3 rounded-md my-4 bg-orange-100 text-black">
        <h1 className="text-xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          An <strong>access token</strong> is a credential that grants permission to access
          specific resources or APIs. It is obtained after successfully
          authenticating with a server. The access token is usually included in
          each request made to the server to access protected resources. A
          <strong>refresh token</strong> is a credential that is used to obtain a new access
          token when the current one expires. It is typically issued alongside
          the access token and has a longer lifespan. The refresh token is
          exchanged with the server to receive a new access token without
          requiring the user to reauthenticate. On the client-side, access
          tokens and refresh tokens should be stored securely. A common practice
          is to store them in secure HTTP-only cookies or use browser storage
          mechanisms such as local storage or session storage. Storing tokens
          securely helps prevent unauthorized access and protects them from
          being exposed to potential attackers.
        </p>
      </div>
      {/* blog 1 */}
      <div className="p-3 rounded-md my-4 bg-orange-100 text-black">
        <h1 className="text-xl font-bold">Compare SQL and NoSQL databases?</h1>
        <p>
          <strong>SQL</strong> and <strong>NoSQL</strong> databases differ in their data models and approach to
          storing and retrieving data. SQL databases, also known as relational
          databases, store data in tables with predefined schemas. They enforce
          strict data integrity and support structured querying using SQL
          (Structured Query Language). SQL databases excel at handling complex
          relationships and transactions. They are typically used for
          applications that require ACID (Atomicity, Consistency, Isolation,
          Durability) properties and strong consistency. NoSQL databases, on the
          other hand, employ a variety of data models such as key-value,
          document, columnar, or graph. They provide flexible schemas, allowing
          for dynamic and unstructured data. NoSQL databases prioritize
          scalability, high performance, and horizontal scaling. They often
          sacrifice strict consistency in favor of availability and partition
          tolerance, making them suitable for distributed and large-scale
          systems. In summary, SQL databases offer structured data storage and
          ACID properties, while NoSQL databases offer flexible schemas,
          scalability, and eventual consistency. The choice between them depends
          on the specific requirements and characteristics of the application.
        </p>
      </div>
      {/* blog 2 */}
      <div className="p-3 rounded-md my-4 bg-orange-100 text-black">
        <h1 className="text-xl font-bold">
          What is express js? and What is Nest JS?
        </h1>
        <p>
          <strong>Express.js</strong> is a lightweight and flexible web
          application framework for Node.js. It simplifies the process of
          building web applications by providing a minimalistic set of features
          for routing, handling HTTP requests and responses, and managing
          middleware.
          <br />
          <br />
          <strong>NestJS</strong> , on the other hand, is a progressive Node.js
          framework for building scalable and maintainable server-side
          applications. It is built on top of Express.js and adds additional
          features such as dependency injection, modular architecture, and
          TypeScript support. NestJS follows a structured and opinionated
          approach that promotes code reusability and maintainability, making it
          well-suited for enterprise-level applications.
        </p>
      </div>
      {/* blog 3 */}
      <div className="p-3 rounded-md my-4 bg-orange-100 text-black">
        <h1 className="text-xl font-bold">
          What is MongoDB aggregate and how does it work?
        </h1>
        <p>
          <strong>MongoDB's aggregate</strong> is a powerful framework that allows for data
          aggregation operations, similar to the functionality of SQL's GROUP BY
          clause. It enables the processing of data and the generation of
          aggregated results based on various operations such as grouping,
          filtering, sorting, and transforming. Using the aggregate framework,
          you can construct a pipeline of stages that dictate how the data
          should be processed. Each stage performs a specific operation on the
          data, such as $match for filtering documents, $group for grouping
          documents by a specific field, $sort for sorting documents, and
          $project for shaping the output. The pipeline stages are processed
          sequentially, with the output of each stage serving as the input for
          the next stage. This allows for complex transformations and
          computations to be performed on the data. Aggregation operations can
          involve grouping documents, calculating sums, averages, maximum or
          minimum values, and performing various arithmetic or statistical
          calculations. By leveraging the aggregate framework, you can harness
          the full power of MongoDB to analyze and process data in a highly
          flexible and efficient manner, enabling advanced data aggregation and
          reporting capabilities.
        </p>
      </div>
      {/* blog 4 */}
    </div>
  );
};

export default Blog;
