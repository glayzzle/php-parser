// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/resource_key.phpt
  it("Behavior of resources as array keys", function () {
    expect(parser.parseCode("<?php\n$r = fopen(__FILE__, 'r');\n$a = [];\necho \"Assign:\";\n$a[$r] = 1;\necho \"Add assign:\";\n$a[$r] += 1;\necho \"Inc:\";\n$a[$r]++;\necho \"Get:\";\nvar_dump($a[$r]);\necho \"Isset:\";\nvar_dump(isset($a[$r]));\necho \"Unset:\";\nunset($a[$r]);\n?>")).toMatchSnapshot();
  });
});
