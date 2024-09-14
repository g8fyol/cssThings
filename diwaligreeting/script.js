"use strict";

const receiver = document.querySelector(".receiver");
const sender = document.querySelector(".sender");

receiver.textContent = new URLSearchParams(location.search).get("receiver");
sender.textContent =
  new URLSearchParams(location.search).get("sender") || "g8fyol";
