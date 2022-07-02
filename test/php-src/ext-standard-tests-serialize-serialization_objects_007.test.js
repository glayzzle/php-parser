// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_007.phpt
  it("Ensure __autoload is called twice if unserialize_callback_func is defined.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo \"in autoload($name)\\n\";\n});\nini_set('unserialize_callback_func','check');\nfunction check($name) {\n    echo \"in check($name)\\n\";\n}\n$o = unserialize('O:3:\"FOO\":0:{}');\nvar_dump($o);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
