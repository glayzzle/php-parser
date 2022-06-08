// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug61453.phpt
  it("Bug #61453:\tSplObjectStorage does not identify objects correctly", function () {
    expect(parser.parseCode("<?php\n$limit = 1000;\n$objects = new SplObjectStorage;\nfor($i = 0; $i < $limit; $i++){\n    $object = new StdClass;\n    if(isset($objects[$object])){\n        die(\"this should never happen, but did after $i iteration\");\n    }\n    $objects[$object] = 1;\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
