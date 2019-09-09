import Honeybadger from 'honeybadger';

Honeybadger.fake();

Honeybadger.configure({
    apiKey: '[ YOUR API KEY HERE ]',
});

Honeybadger.errorHandler;
