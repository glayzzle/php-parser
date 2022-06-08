// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_language.phpt
  it("mb_language()", function () {
    expect(parser.parseCode("<?php\necho \"Checking default language:\\n\";\nvar_dump(mb_language());\necho \"Checking default language after ini_set:\\n\";\nini_set('mbstring.language', 'uni');\nvar_dump(mb_language());\necho \"Changing language to English should be successful:\\n\";\nvar_dump(mb_language('English'));\necho \"Confirm language was changed:\\n\";\nvar_dump(mb_language());\necho \"Try changing to a non-existent language:\\n\";\ntry {\n    var_dump(mb_language('Pig Latin'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(mb_language());\n?>")).toMatchSnapshot();
  });
});
