// Type definitions for honeybadger 1.3
// Project: https://github.com/honeybadger-io/honeybadger-node
// Definitions by: Levi Bostian <https://github.com/levibostian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare module 'honeybadger' {
    import { RequestHandler, ErrorRequestHandler } from 'express';

    interface ConfigureOptions {
        apiKey: string;
        developmentEnvironments: string[];
    }

    type HoneyBadger = {
        configure: (options: ConfigureOptions) => void;
        setContext: (event: Object) => void;
        resetContext(): void;
        factory(): HoneyBadger;

        requestHandler: RequestHandler;
        errorHandler: ErrorRequestHandler;
    };

    const honeybadger: HoneyBadger;

    export default honeybadger;
}
