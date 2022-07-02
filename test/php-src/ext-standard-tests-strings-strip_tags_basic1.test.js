// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_basic1.phpt
  it("Test strip_tags() function : basic functionality - with default arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strip_tags() : basic functionality ***\\n\";\n// array of arguments\n$string_array = array (\n  \"<html>hello</html>\",\n  '<html>hello</html>',\n  \"<?php echo hello ?>\",\n  '<?php echo hello ?>',\n  \"<? echo hello ?>\",\n  '<? echo hello ?>',\n  \"<% echo hello %>\",\n  '<% echo hello %>',\n  \"<script language=\\\"PHP\\\"> echo hello </script>\",\n  '<script language=\\\"PHP\\\"> echo hello </script>',\n  \"<html><b>hello</b><p>world</p></html>\",\n  '<html><b>hello</b><p>world</p></html>',\n  \"<html><!-- COMMENT --></html>\",\n  '<html><!-- COMMENT --></html>'\n);\n// Calling strip_tags() with default arguments\n// loop through the $string_array to test strip_tags on various inputs\n$iteration = 1;\nforeach($string_array as $string)\n{\n  echo \"-- Iteration $iteration --\\n\";\n  var_dump( strip_tags($string) );\n  $iteration++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
