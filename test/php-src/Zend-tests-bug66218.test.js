// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66218.phpt
  it("Bug #66218 zend_register_functions breaks reflection", function () {
    expect(parser.parseCode("<?php\n$tab = get_extension_funcs(\"standard\");\n$fcts = array(\"dl\");\nforeach ($fcts as $fct) {\n    if (in_array($fct, $tab)) {\n        echo \"$fct Ok\\n\";\n    }\n}\n?>\nDone")).toMatchSnapshot();
  });
});
