// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/flock_variation.phpt
  it("Test flock() function: Variations", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing flock() fun with the various operation and\n    wouldblock values                                ***\\n\";\n$file = preg_replace(\"~\\.phpt?$~\", '', __FILE__);\n$fp = fopen($file, \"w\");\n/* array of operations */\n$operations = array(\n  LOCK_SH,\n  LOCK_EX,\n  LOCK_SH|LOCK_NB,\n  LOCK_EX|LOCK_NB,\n  LOCK_SH|LOCK_EX,\n  LOCK_UN,\n  1,\n  2,\n  TRUE\n);\n/* array of wouldblocks */\n$wouldblocks = array(\n  0,\n  1,\n  2,\n  1.234,\n  TRUE,\n  FALSE,\n  NULL,\n  array(1,2,3),\n  array(),\n  \"string\",\n  \"\",\n  /* binary input */\n  b\"string\",\n  b\"\",\n  \"\\0\"\n);\n$i = 0;\nforeach($operations as $operation) {\n  echo \"--- Outer iteration $i ---\\n\";\n  var_dump(flock($fp, $operation));\n  $j = 0;\n  foreach($wouldblocks as $wouldblock) {\n    echo \"-- Inner iteration $j in $i --\\n\";\n    var_dump(flock($fp, $operation, $wouldblock));\n    $j++;\n  }\n  $i++;\n}\nfclose($fp);\n@unlink($file);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
