// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_rot13_basic.phpt
  it("Test soundex() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing str_rot13() : basic functionality ***\\n\";\necho \"\\nBasic tests\\n\";\nvar_dump(str_rot13(\"str_rot13() tests starting\"));\nvar_dump(str_rot13(\"abcdefghijklmnopqrstuvwxyz\"));\necho \"\\nEnsure numeric characters are left untouched\\n\";\nif (strcmp(str_rot13(\"0123456789\"), \"0123456789\") == 0) {\n    echo \"Strings equal : TEST PASSED\\n\";\n} else {\n    echo \"Strings unequal : TEST FAILED\\n\";\n}\necho \"\\nEnsure non-alphabetic characters are left untouched\\n\";\nif (strcmp(str_rot13(\"!%^&*()_-+={}[]:;@~#<,>.?\"), \"!%^&*()_-+={}[]:;@~#<,>.?\")) {\n    echo \"Strings equal : TEST PASSED\\n\";\n} else {\n    echo \"Strings unequal : TEST FAILED\\n\";\n}\necho \"\\nEnsure strings round trip\\n\";\n$str = \"str_rot13() tests starting\";\n$encode = str_rot13($str);\n$decode = str_rot13($encode);\nif (strcmp($str, $decode) == 0) {\n    echo \"Strings equal : TEST PASSED\\n\";\n} else {\n    echo \"Strings unequal : TEST FAILED\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
