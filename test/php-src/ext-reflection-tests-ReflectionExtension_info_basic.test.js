// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_info_basic.phpt
  it("ReflectionExtension::info()", function () {
    expect(parser.parseCode("<?php\n$obj = new ReflectionExtension('reflection');\nob_start();\n$testa = $obj->info();\n$testb = ob_get_clean();\nvar_dump($testa);\nvar_dump(strlen($testb) > 24);\n?>")).toMatchSnapshot();
  });
});
