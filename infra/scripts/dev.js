/* global Promise */
const { spawn } = require("child_process");

const isWindows = process.platform === "win32";

function run(cmd, args = []) {
  return new Promise((resolve) => {
    spawn(cmd, args, { stdio: "inherit", shell: isWindows }).on(
      "close",
      (code) => resolve(code ?? 0),
    );
  });
}

async function main() {
  await run("npm", ["run", "services:up"]);
  await run("npm", ["run", "services:wait:database"]);
  await run("npm", ["run", "migrations:up"]);

  const proc = spawn("npm", ["run", "dev:next"], {
    stdio: "inherit",
    shell: isWindows,
  });

  const stop = () => run("npm", ["run", "services:stop"]);

  process.on("SIGINT", () => proc.kill("SIGINT"));

  proc.on("close", async (code) => {
    await stop();
    process.exit(code ?? 0);
  });
}

main();
