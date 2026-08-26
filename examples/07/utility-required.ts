// examples/07/utility-required.ts
interface Config {
  host?: string;
  port?: number;
  ssl?: boolean;
  timeout?: number;
}

type CompleteConfig = Required<Config>;

function initializeConfig(config: Config): CompleteConfig {
  return {
    host: config.host ?? "localhost",
    port: config.port ?? 3000,
    ssl: config.ssl ?? false,
    timeout: config.timeout ?? 5000,
  };
}

console.log(initializeConfig({ port: 4000 }));
