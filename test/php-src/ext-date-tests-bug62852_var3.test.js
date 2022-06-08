// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug62852_var3.phpt
  it("Bug #62852 (Unserialize invalid DateTime causes crash), variation 3", function () {
    expect(parser.parseCode("<?php\n$s2 = 'O:3:\"Foo\":3:{s:4:\"date\";s:19:\"0000-00-00 00:00:00\";s:13:\"timezone_type\";i:0;s:8:\"timezone\";s:3:\"UTC\";}';\nglobal $foo;\nclass Foo extends DateTime {\n    function __wakeup(): void {\n        global $foo;\n        $foo = $this;\n        parent::__wakeup();\n    }\n}\ntry {\n    unserialize( $s2 );\n} catch ( Exception $e ) {}\nvar_dump( $foo );\n?>")).toMatchSnapshot();
  });
});
