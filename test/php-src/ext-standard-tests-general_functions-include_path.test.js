// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/include_path.phpt
  it("*_include_path() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_include_path());\nvar_dump(ini_restore(\"include_path\"));\nvar_dump(set_include_path(\"var\"));\nvar_dump(get_include_path());\nvar_dump(ini_restore(\"include_path\"));\nvar_dump(get_include_path());\nvar_dump(set_include_path(\".:/path/to/dir\"));\nvar_dump(get_include_path());\nvar_dump(ini_restore(\"include_path\"));\nvar_dump(get_include_path());\nvar_dump(set_include_path(\"\"));\nvar_dump(get_include_path());\nvar_dump(ini_restore(\"include_path\"));\nvar_dump(get_include_path());\nvar_dump(ini_restore(\"include_path\"));\nvar_dump(get_include_path());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
