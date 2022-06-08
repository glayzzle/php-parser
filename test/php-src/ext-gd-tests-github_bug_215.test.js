// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/github_bug_215.phpt
  it("Github #215 (imagefilltoborder stack overflow when invalid pallete index used)", function () {
    expect(parser.parseCode("<?php\n$image = imagecreate( 10, 10 );\n$bgd = imagecolorallocate( $image, 0, 0, 0 );\n$border = imagecolorallocate( $image, 255, 0, 0 );\n$fillcolor = imagecolorallocate( $image, 255, 0, 0 );\n/* Use unallocated color index */\nimagefilltoborder( $image, 0,0, $border+10, $fillcolor);\necho \"#1 passes\\n\";\n/* Use negative color index */\nimagefilltoborder( $image, 0,0, -$border,  $fillcolor);\necho \"#2 passes\\n\";\n/* Use unallocated color index */\nimagefilltoborder( $image, 0,0, $border, $fillcolor+10);\necho \"#3 passes\\n\";\n/* Use negative color index */\nimagefilltoborder( $image, 0,0, $border, -$fillcolor);\necho \"#4 passes\\n\";\n/* Use negative color index */\nimagefilltoborder( $image, 0,0, $border+10, $fillcolor+10);\necho \"#5 passes\";\n?>")).toMatchSnapshot();
  });
});
