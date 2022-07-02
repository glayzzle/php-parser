// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/proc_open_with_wrong_resource_type.phpt
  it("proc_open does not leak memory when called with wrong resource type in descriptorspec", function () {
    expect(parser.parseCode("<?php\n    $context = stream_context_create();\n    try {\n      proc_open('not_a_real_command_but_I_dont_care', array(0 => $context), $pipes);\n      echo \"Not reached\";\n    } catch (TypeError $e) {\n      echo $e->getMessage(), \"\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
