// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/wrong_inlining_005.phpt
  it("Inlining of functions with ref arguments", function () {
    expect(parser.parseCode("<?php\nfunction by_ref(&$var)\n{\n}\nfunction &get_array() {\n    $array = [new stdClass];\n    return $array;\n}\nfunction test()\n{\n    by_ref(get_array()[0]);\n    print \"ok!\\n\";\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
