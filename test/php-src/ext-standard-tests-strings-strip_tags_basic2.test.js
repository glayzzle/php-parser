// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_basic2.phpt
  it("Test strip_tags() function : basic functionality - with all arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strip_tags() : basic functionality ***\\n\";\n// Calling strip_tags() with all possible arguments\n$string = \"<html><p>hello</p><b>world</b><a href=\\\"#fragment\\\">Other text</a></html><?php echo hello ?>\";\n$allowed_tags_array=array(\n  \"<html>\",\n  '<html>',\n  \"<p>\",\n  '<p>',\n  \"<a>\",\n  '<a>',\n  \"<?php\",\n  '<?php',\n  \"<html><p><a><?php\"\n);\n// loop through the $string with various $allowed_tags_array to test strip_tags\n// on various allowed tags\n$iteration = 1;\nforeach($allowed_tags_array as $tags)\n{\n  echo \"-- Iteration $iteration --\\n\";\n  var_dump( strip_tags($string, $tags) );\n  $iteration++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
