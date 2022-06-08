// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/joaat.phpt
  it("Hash: Jenkins's one-at-a-time", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    array(\"hello world\", \"3e4a5a57\"),\n    array(\"\", 0),\n    array(\"\", \"000000\"),\n    array(\"a\", \"ca2e9442\"),\n    array(\"aa\", \"7081738e\"),\n);\n$i = 0;\n$pass = true;\nforeach ($tests as $test) {\n    ++$i;\n    $result = hash(\"joaat\", $test[0]);\n    if ($result != $test[1]) {\n        echo \"Iteration \" . $i . \" failed - expected '\" . $test[1] . \"', got '\" . $result . \"' for '\" . $test[1] . \"'\\n\";\n        $pass = false;\n    }\n}\nif($pass) {\n    echo \"PASS\";\n}\n?>")).toMatchSnapshot();
  });
});
