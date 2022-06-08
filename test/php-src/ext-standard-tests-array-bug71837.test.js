// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug71837.phpt
  it("Bug #71837 (Wrong arrays behaviour)", function () {
    expect(parser.parseCode("<?php\n$p = array(array());\narray_push($p[0], array(100));\n$c = array_merge($p, array());\n$c[0][0] = 200;\nprint_r($p);\n?>")).toMatchSnapshot();
  });
});
