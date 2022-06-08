// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/002.phpt
  it("token_get_all()", function () {
    expect(parser.parseCode("<?php\n$strings = array(\n    '<?php echo 1; if (isset($a)) print $a+1; $a++; $a--; $a == 2; $a === 2; endif; ?>',\n    '<?php switch($a) { case 1: break; default: break; } while($a) { exit; } ?>',\n    '<?php /* comment */ if (1 || 2) { } $a = 2 | 1; $b = 3^2; $c = 4&2; ?>',\n    /* feel free to add more yourself */\n    'wrong syntax here'\n);\nforeach ($strings as $s) {\n    var_dump(token_get_all($s));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
