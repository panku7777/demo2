const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    ISBN: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String, 
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImageURL: {
      type: String,
      required: true,
    },
    freeview1Url: {
      type: String,
      required: true,
    },
    freeview2Url: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model('books', bookSchema);

module.exports = bookModel;
