// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtolower.phpt
  it("Test strtolower() function", function () {
    expect(parser.parseCode("<?php\nif( substr(PHP_OS, 0, 3) == 'WIN') {\n  setlocale(LC_ALL, 'C');\n} else {\n  setlocale(LC_ALL, 'en_US.UTF-8');\n}\necho \"*** Testing strtolower() with 128 chars ***\\n\";\nfor ($i=0; $i<=127; $i++){\n  $char = chr($i);\n  print(bin2hex($char)).\" => \".(bin2hex(strtolower(\"$char\"))).\"\\n\";\n}\necho \"*** Testing strlower() with basic strings ***\\n\";\n$str = \"Mary Had A liTTle LAmb and ShE loveD IT So\\n\";\nvar_dump(strtolower($str));\necho \"\\n*** Testing strtolower() with various strings ***\";\n/* strings to pass strtolower() */\n$strings = array (\n  \"\",\n  \"string\",\n  \"stRINg0234\",\n  \"1.233.344StrinG12333\",\n  \"$$$$$$!!!!@@@@@@@ ABCDEF !!!***\",\n  \"ABCD\\0abcdABCD\",\n  TRUE,\n  FALSE,\n);\n$count = 0;\n/* loop through to check possible variations */\nforeach ($strings as $string) {\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( strtolower($string) );\n  $count++;\n}\necho \"\\n*** Testing strtolower() with two different case strings ***\\n\";\nif (strtolower(\"HeLLo woRLd\") === strtolower(\"hEllo WORLD\"))\n  echo \"strings are same, with Case Insensitive\\n\";\nelse\n  echo \"strings are not same\\n\";\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
