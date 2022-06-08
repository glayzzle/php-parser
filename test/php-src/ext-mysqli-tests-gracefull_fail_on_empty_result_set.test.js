// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/gracefull_fail_on_empty_result_set.phpt
  it("Fail gracefully on empty result set", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    // Returns only one result set\n    $link->multi_query(\"SELECT 1\");\n    var_dump($link->next_result()); // should return false\n    var_dump($link->store_result()); // now what happens here!?\n    // Returns only one result set\n    $link->multi_query(\"SELECT 1\");\n    var_dump($link->next_result());\n    var_dump($link->use_result());\n    $link->close();\n?>")).toMatchSnapshot();
  });
});
