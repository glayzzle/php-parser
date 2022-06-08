// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77691.phpt
  it("Bug #77691: Opcache passes wrong value for inline array push assignments", function () {
    expect(parser.parseCode("<?php\nif (true) {\n    function dump($str) {\n        var_dump($str);\n    }\n}\nfunction test() {\n    $array = [];\n    dump($array[] = 'test');\n    dump($array);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
