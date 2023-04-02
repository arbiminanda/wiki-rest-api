module.exports = (mongoose) => {
  const articleSchema = mongoose.Schema({
    title: String,
    content: String,
  });
  return mongoose.model("Article", articleSchema);
};
