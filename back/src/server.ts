import app from "./app.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur en cours sur le port ${PORT}`);
});