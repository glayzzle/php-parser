// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39438.phpt
  it("Bug #39438 (Fatal error: Out of memory)", function () {
    expect(parser.parseCode("<?php\n$i=0;\n$test2=array(\n   'a1_teasermenu' => array(\n        'downloadcounter' => 2777,\n        'versions' => array(\n            '0.1.0' => array (\n                'title' => 'A1 Teasermenu',\n                'description' => 'Displays a teaser for advanced subpages or a selection of advanced pages',\n                'state' => 'stable',\n                'reviewstate' => 0,\n                'category' => 'plugin',\n                'downloadcounter' => 2787,\n                'lastuploaddate' => 1088427240,\n                'dependencies' => array (\n                      'depends' => array(\n                              'typo3' =>'',\n                              'php' =>'',\n                              'cms' => ''\n                       ),\n                      'conflicts' => array('' =>'')\n                ),\n                'authorname' => 'Mirko Balluff',\n                'authoremail' => 'balluff@amt1.de',\n                'ownerusername' => 'amt1',\n                't3xfilemd5' => '3a4ec198b6ea8d0bc2d69d9b7400398f',\n            )\n        )\n    )\n);\n$test=array();\nwhile($i<1200) {\n    $test[]=$test2;\n    $i++;\n}\n$out=serialize($test);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
