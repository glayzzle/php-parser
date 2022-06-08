// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug72014.phpt
  it("Bug #72014 (Including a file with anonymous classes multiple times leads to fatal error)", function () {
    expect(parser.parseCode("<?php\nfile_put_contents(__DIR__ . \"/bug72014.annon.php\", <<<PHP\n<?php\n\\$a = new class() { public \\$testvar = \"Foo\\n\"; };\necho \\$a->testvar;\nPHP\n);\ninclude(__DIR__ . \"/bug72014.annon.php\");\ninclude(__DIR__ . \"/bug72014.annon.php\");\ninclude(__DIR__ . \"/bug72014.annon.php\");\n?>")).toMatchSnapshot();
  });
});
