// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69996.phpt
  it("Bug #69996 (Changing the property of a cloned object affects the original)", function () {
    expect(parser.parseCode("<?php\nfunction method($cache) {\n      $prepared = clone $cache;\n      var_dump($prepared->data);\n      $prepared->data = \"bad\";\n      return $prepared;\n}\n$cache = new stdClass();\n$cache->data = \"good\";\nfor ($i = 0; $i < 5; ++$i) {\n       method($cache);\n}\n?>")).toMatchSnapshot();
  });
});
