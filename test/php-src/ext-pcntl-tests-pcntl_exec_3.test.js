// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_exec_3.phpt
  it("pcntl_exec() 3", function () {
    expect(parser.parseCode("<?php\n$file = tempnam(sys_get_temp_dir(),\"php\");\nvar_dump(pcntl_exec($file, array(\"foo\",\"bar\"), array(\"foo\" => \"bar\")));\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
