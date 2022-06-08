// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug61287.phpt
  it("bug #61287 - inflate needs the terminating null byte", function () {
    expect(parser.parseCode("<?php\n$array = array(\n    'region_id' => 1,\n    'discipline' => 23,\n    'degrees' => array(),\n    'country_id' => 27\n);\n$serialized = serialize($array);\n$deflated = gzdeflate($serialized, 9);\n$inflated = gzinflate($deflated);\necho strlen($inflated),\"\\n\";\n?>\nDone")).toMatchSnapshot();
  });
});
