require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.axsuckb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const db = client.db("readers_review");
    const bookCollection = db.collection("books");

    // !Start- Get books*************
    app.get("/books", async (req, res) => {
      const cursor = bookCollection.find({}).sort({ _id: -1 });
      const books = await cursor.toArray();

      res.send({ status: true, data: books });
    });
    // !End- Get books*************

    //!Start of POST book
    app.post("/books", async (req, res) => {
      const books = req.body;
      console.log(books);

      const result = await bookCollection.insertOne(books);
      console.log("Received data:", books);
      res.send(result);
    });

    //!End of POST book

    //! Start of get single book detailed page
    app.get("/books/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const result = await bookCollection.findOne({ _id: new ObjectId(id) });
      console.log(result);
      res.send(result);
    });

    //! End of get single book detailed page

    // app.delete("/product/:id", async (req, res) => {
    //   const id = req.params.id;

    //   const result = await productCollection.deleteOne({ _id: ObjectId(id) });
    //   console.log(result);
    //   res.send(result);
    // });

    // ! Start of POST review
    app.post("/reviews/:id", async (req, res) => {
      const bookId = req.params.id;
      const review = req.body.review;

      console.log(bookId);
      console.log(review);

      const result = await bookCollection.updateOne(
        { _id: new ObjectId(bookId) },
        { $push: { reviews: review } }
      );

      console.log(result);

      if (result.modifiedCount !== 1) {
        console.error("Book not found or comment not added");
        res.json({ error: "Product not found or comment not added" });
        return;
      }

      console.log("Comment added successfully");
      res.json({ message: "Comment added successfully" });
    });

    // ! End of POST review

    // !Start of GET review

    app.get("/reviews/:id", async (req, res) => {
      const bookId = req.params.id;

      const result = await bookCollection.findOne(
        { _id: new ObjectId(bookId) },
        { projection: { _id: 0, reviews: 1 } }
      );

      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: "Book not found" });
      }
    });

    // !End of GET review

    // app.post("/user", async (req, res) => {
    //   const user = req.body;

    //   const result = await userCollection.insertOne(user);

    //   res.send(result);
    // });

    // app.get("/user/:email", async (req, res) => {
    //   const email = req.params.email;

    //   const result = await userCollection.findOne({ email });

    //   if (result?.email) {
    //     return res.send({ status: true, data: result });
    //   }

    //   res.send({ status: false });
    // });
  } finally {
  }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
