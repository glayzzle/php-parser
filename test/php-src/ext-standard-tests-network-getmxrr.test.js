// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/getmxrr.phpt
  it("getmxrr() test", function () {
    expect(parser.parseCode("<?php\n$domains = array(\n    'mx1.tests.php.net.',\n    'mx2.tests.php.net.',\n    'qa.php.net.',\n);\nforeach ($domains as $domain) {\n    $result = getmxrr($domain, $hosts, $weights);\n    echo \"Result: \" . ($result ? \"true\" : \"false\")\n       . \", hosts: \" . count( $hosts )\n       . \", weights: \" . count( $weights ) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
