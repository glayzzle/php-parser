// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/func_info.phpt
  it("Test that return types in zend_func_info.c match return types in stubs", function () {
    expect(parser.parseCode("<?php\n$contents = \"<?php\\n\";\n$contents .= \"function test() {\\n\";\nforeach (get_defined_functions()[\"internal\"] as $function) {\n    if (in_array($function, [\"extract\", \"compact\", \"get_defined_vars\"])) {\n        continue;\n    }\n    $contents .= \"    \\$result = {$function}();\\n\";\n}\n$contents .= \"}\\n\";\nfile_put_contents(\"func_info_generated.php\", $contents);\nrequire_once(\"func_info_generated.php\");\n?>")).toMatchSnapshot();
  });
});
