import React from "react";
import PageTitle from "../PageTitle";

const Blog = () => {
  return (
    <div className="my-24">
      <PageTitle title="Blog"></PageTitle>
      <div className="text-center">
        <h1 className="text-3xl   mb-14">Latest Blog</h1>
      </div>
      <div>
        <div className="container mx-auto px-4 grid gap-7 grid-cols-1 md:grid-cols-2">
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl   mb-4">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="text-gray-600 text-lg">
              Access tokens and refresh tokens are essential components of
              authentication systems. An access token represents the
              authorization granted to a client application to access specific
              resources, while a refresh token allows obtaining a new access
              token without reauthentication. Access tokens are used to access
              protected resources, and refresh tokens are securely stored and
              used to request new access tokens when the current one expires. On
              the client-side, it is crucial to store tokens securely, such as
              in an HTTP-only cookie or local storage, to protect them from
              unauthorized access or tampering.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl   mb-4">
              Compare SQL and NoSQL databases?
            </h1>
            <p className="text-gray-600 text-lg">
              SQL and NoSQL databases differ in their data organization and
              characteristics. SQL databases, like traditional relational
              databases, use structured tables with predefined schemas. They are
              good for structured data and complex relationships, providing
              reliability and consistency through SQL queries. NoSQL databases,
              on the other hand, offer flexibility by storing unstructured or
              varying data without fixed schemas. They scale well and offer high
              performance, making them suitable for big data and real-time
              analytics. However, they may sacrifice some traditional guarantees
              to prioritize scalability. In simpler terms, SQL databases are
              like organized spreadsheets, while NoSQL databases are like
              flexible document folders
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl   mb-4">
              What is express js? What is Nest JS
            </h1>
            <p className="text-gray-600 text-lg">
              Express.js is a popular web application framework for Node.js. It
              provides a minimalist and flexible approach to building web
              servers and APIs. With a straightforward and intuitive API,
              Express.js allows developers to handle routing, middleware, and
              other web-related tasks efficiently. NestJS, on the other hand, is
              a progressive TypeScript framework built on top of Express.js. It
              leverages modern JavaScript features and design patterns to create
              scalable and maintainable server-side applications. NestJS focuses
              on modularity and extensibility, making it suitable for building
              complex enterprise applications. It provides a powerful dependency
              injection system, along with features like decorators, modules,
              and middleware, to simplify the development process.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl   mb-4">
              What is MongoDB aggregate and how does it work
            </h1>
            <p className="text-gray-600 text-lg">
              In MongoDB, the aggregate framework is a versatile and powerful
              tool for data manipulation and analysis. It enables the processing
              of data in a collection through a series of pipeline stages. Each
              stage performs a specific operation, such as filtering, grouping,
              or sorting the data. These stages can be combined in a flexible
              manner to create complex queries and transformations. The
              aggregate framework is particularly useful for tasks like
              generating reports, summarizing data, and performing advanced
              analytics. By leveraging the pipeline approach, MongoDB aggregate
              provides a robust and efficient mechanism for working with data in
              a structured and customizable manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
