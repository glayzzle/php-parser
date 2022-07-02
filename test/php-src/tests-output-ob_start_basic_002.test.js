// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_002.phpt
  it("ob_start(): Check behaviour with various callback return values.", function () {
    expect(parser.parseCode("<?php\nfunction return_empty_string($string) {\n    return \"\";\n}\nfunction return_false($string) {\n    return false;\n}\nfunction return_null($string) {\n    return null;\n}\nfunction return_string($string) {\n    return \"I stole your output.\";\n}\nfunction return_zero($string) {\n    return 0;\n}\n// Use each of the above functions as an output buffering callback:\n$functions = get_defined_functions();\n$callbacks = $functions['user'];\nsort($callbacks);\nforeach ($callbacks as $callback) {\n  echo \"--> Use callback '$callback':\\n\";\n  ob_start($callback);\n  echo 'My output.';\n  ob_end_flush();\n  echo \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
