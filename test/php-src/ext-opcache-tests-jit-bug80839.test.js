// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80839.phpt
  it("Bug #80839: PHP problem with JIT", function () {
    expect(parser.parseCode("<?php\n$a = null; // the problem only occurs when set to NULL\ntest($a, 'y');\nfunction test($str, $pad) {\n\t$x = $str . str_repeat($pad, 15); // $x now contains \"yyyyyyyyyyyyyyy\"\n\tvar_dump($x);\n\t$gft = new gft();\n\t$gft->info(33);\n\t// $x has been changed ????\n\t// $x contains what was echoed in the function 'info'\n\tvar_dump($x);\n}\nclass gft {\n\tprivate $strVal = 'abcd ';\n\tpublic function info($info, $prefix = ' Info:') {\n\t\techo $this->strVal.$prefix.serialize($info).'aaaa';\n\t\techo \"\\n\";\n\t}\n}\n?>")).toMatchSnapshot();
  });
});
