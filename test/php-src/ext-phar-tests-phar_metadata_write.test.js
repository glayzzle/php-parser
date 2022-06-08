// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_metadata_write.phpt
  it("Phar with metadata (write)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = array('cont' => 'a');\n$files['b'] = array('cont' => 'b', 'meta' => 'hi there');\n$files['c'] = array('cont' => 'c', 'meta' => array('hi', 'there'));\n$files['d'] = array('cont' => 'd', 'meta' => array('hi'=>'there','foo'=>'bar'));\ninclude 'files/phar_test.inc';\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\n$phar = new Phar($fname);\nvar_dump($phar->getMetadata());\n$phar->setMetadata(array('my' => 'friend'));\n$phar->setMetadata(array('my' => 'friend'));\nvar_dump($phar->getMetadata());\n$phar['a']->setMetadata(42);\n$phar['b']->setMetadata(NULL);\n$phar['c']->setMetadata(array(25, 'foo'=>'bar'));\n$phar['d']->setMetadata(true);\nforeach($files as $name => $cont) {\n    var_dump($phar[$name]->getMetadata());\n}\nunset($phar);\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\n?>")).toMatchSnapshot();
  });
});
