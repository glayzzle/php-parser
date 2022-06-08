// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/simplexml_load_file.phpt
  it("simplexml_load_file()", function () {
    expect(parser.parseCode("<?php\n    $simple = simplexml_load_file(__DIR__.\"/book.xml\");\n    var_dump($simple);\n    echo \"Done\";\n?>")).toMatchSnapshot();
  });
});
