// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/013.phpt
  it("Parsing a file using constructor", function () {
    expect(parser.parseCode("<?php\n        $tidy = new tidy(__DIR__.\"/013.html\", array(\"show-body-only\"=>true));\n        $tidy->cleanRepair();\n        echo $tidy;\n?>")).toMatchSnapshot();
  });
});
