// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/007.phpt
  it("INI functions test", function () {
    expect(parser.parseCode("<?php\n$ini1 =  ini_get('include_path');\nini_set('include_path','ini_set_works');\necho ini_get('include_path').\"\\n\";\nini_restore('include_path');\n$ini2 =  ini_get('include_path');\nif ($ini1 !== $ini2) {\n        echo \"ini_restore() does not work.\\n\";\n}\nelse {\n        echo \"ini_restore_works\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
