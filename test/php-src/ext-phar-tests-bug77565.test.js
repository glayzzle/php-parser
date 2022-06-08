// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug77565.phpt
  it("Bug #77565 (Incorrect locator detection in ZIP-based phars)", function () {
    expect(parser.parseCode("<?php\n$phar = new PharData(__DIR__ . '/bug77565.zip');\nvar_dump($phar['1.zip']->getFilename());\n?>")).toMatchSnapshot();
  });
});
