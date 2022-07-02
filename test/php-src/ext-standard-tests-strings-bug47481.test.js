// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug47481.phpt
  it("Bug #47481 (natcasesort() does not sort extended ASCII characters correctly)", function () {
    expect(parser.parseCode("<?php\n/*\n * Test natcasesort() with extended ASCII characters\n */\n$array = array ('Süden', 'spielen','Sonne','Wind','Regen','Meer');\necho \"\\n-- Before sorting: --\\n\";\nvar_dump($array);\necho \"\\n-- After Sorting: --\\n\";\nvar_dump(natcasesort($array));\nvar_dump($array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
