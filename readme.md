# wayback-css-api

Api to retrieve css from the wayback machine.

## Installation

```bash
git clone https://github.com/cssstats/wayback-css-api && cd $_
npm i && npm start
```

## Usage

```sh
curl 'localhost:3000?url=johnotander.com&timestamp=20150222'
```

You can also add the `stats` query param to get cssstats back

```sh
curl 'localhost:3000?url=johnotander.com&timestamp=20150222&stats=true'
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
