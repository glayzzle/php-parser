// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug69523.phpt
  it("setcookie() allows empty cookie name", function () {
    expect(parser.parseCode("<?php\ntry {\n    setcookie('', 'foo');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
