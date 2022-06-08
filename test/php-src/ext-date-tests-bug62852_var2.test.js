// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug62852_var2.phpt
  it("Bug #62852 (Unserialize invalid DateTime causes crash), variation 2", function () {
    expect(parser.parseCode("<?php\n$s2 = 'O:3:\"Foo\":3:{s:4:\"date\";s:20:\"10007-06-07 03:51:49\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:3:\"UTC\";}';\nglobal $foo;\nclass Foo extends DateTime {\n    function __wakeup(): void {\n        global $foo;\n        $foo = $this;\n        parent::__wakeup();\n    }\n}\ntry {\n    unserialize( $s2 );\n} catch ( Exception $e ) {}\nvar_dump( $foo );\n?>")).toMatchSnapshot();
  });
});
