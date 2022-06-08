// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_error_005.phpt
  it("ob_start(): ensure buffers can't be added from within callback.", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nfunction f($str) {\n    ob_start();\n    echo \"hello\";\n    ob_end_flush();\n    return $str;\n}\nvar_dump(ob_start('f'));\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
