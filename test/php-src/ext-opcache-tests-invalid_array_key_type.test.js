// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/invalid_array_key_type.phpt
  it("Don't add array value type is key type is illegal", function () {
    expect(parser.parseCode("<?php\nfunction test(\\SplObjectStorage $definitions = null) {\n    $argument = new stdClass;\n    $definitions[$argument] = 1;\n    $definitions[$argument] += 1;\n    $argument = [];\n    $definitions[$argument] = 1;\n    $definitions[$argument] += 1;\n}\nfunction test2() {\n    $a[[]] = $undef;\n}\nfunction test3() {\n    foreach (range(0, $undef) as $v) { }\n}\nfunction test4() {\n    var_dump(range(0, ~$u));\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
