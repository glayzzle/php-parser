// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_005.phpt
  it("ob_start(): non-static method as static callbacks.", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nClass C {\n    function h($string) {\n        return $string;\n    }\n}\nfunction checkAndClean() {\n  print_r(ob_list_handlers());\n  while (ob_get_level()>0) {\n    ob_end_flush();\n  }\n}\nvar_dump(ob_start('C::h'));\ncheckAndClean();\n?>")).toMatchSnapshot();
  });
});
