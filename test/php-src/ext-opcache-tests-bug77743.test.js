// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77743.phpt
  it("Bug #77743: Incorrect pi node insertion for jmpznz with identical successors", function () {
    expect(parser.parseCode("<?php\nfunction buggy($a) {\n    $id_country = $a;\n    if ($id_country === false) {\n        if (true) {\n        }\n    }\n    var_dump($id_country);\n}\nbuggy(42);\n?>")).toMatchSnapshot();
  });
});
