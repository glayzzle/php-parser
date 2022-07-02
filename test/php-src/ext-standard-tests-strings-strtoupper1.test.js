// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtoupper1.phpt
  it("Test strtoupper() function", function () {
    expect(parser.parseCode("<?php\nif( substr(PHP_OS, 0, 3) == 'WIN') {\n  setlocale(LC_ALL, 'C');\n} else {\n  setlocale(LC_ALL, 'en_US.UTF-8');\n}\necho \"*** Testing strtoupper() with 128 chars ***\\n\";\nfor ($i=0; $i<=127; $i++){\n  $char = chr($i);\n  print(bin2hex($char)).\" => \".(bin2hex(strtoupper(\"$char\"))).\"\\n\";\n}\necho \"\\n*** Testing strtoupper() with basic strings ***\\n\";\n$str = \"Mary Had A liTTle LAmb and ShE loveD IT So\\n\";\nvar_dump(strtoupper($str));\necho \"\\n*** Testing strtoupper() with various strings ***\";\n/* strings to pass strtoupper() */\n$strings = array (\n  \"\",\n  \"string\",\n  \"stRINg0234\",\n  \"1.233.344StrinG12333\",\n  \"$$$$$$!!!!@@@@@@@ ABCDEF !!!***\",\n  \"ABCD\\0abcdABCD\",\n  TRUE,\n  FALSE,\n);\n$count = 0;\n/* loop through to check possible variations */\nforeach ($strings as $string) {\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( strtoupper($string) );\n  $count++;\n}\necho \"\\n*** Testing strtoupper() with two different case strings ***\\n\";\nif (strtoupper(\"HeLLo woRLd\") === strtoupper(\"hEllo WORLD\"))\n  echo \"strings are same, with Case Insensitive\\n\";\nelse\n  echo \"strings are not same\\n\";\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
