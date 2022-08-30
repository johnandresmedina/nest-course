import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { name } from "./bases/01-types";
// import { pokemon } from "./bases/02-objects";
// import { charmander } from "./bases/04-injection";
// import { charmander } from "./bases/05-decorators";
import { charmander } from "./bases/06-decorators";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello ${name}</h1>
    <h1>Hello ${charmander.name}</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
