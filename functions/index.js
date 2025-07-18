const functions = require("firebase-functions");
const express = require("express");
const { Nuxt } = require("nuxt-start");
const { join } = require("path");

const app = express();

const config = {
  dev: false,
  rootDir: join(__dirname), // 現在 .nuxt 就在這層
  buildDir: '.nuxt',
};

const nuxt = new Nuxt(config);

app.use((req, res, next) => {
  nuxt.render(req, res, next);
});

exports.nuxtApp = functions
  .runWith({ timeoutSeconds: 60, memory: "512MB" })
  .https.onRequest(app);
