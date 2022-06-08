// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/metadata_write_commit.phpt
  it("Phar with meta-data (write)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = array('cont' => 'a');\n$files['b'] = array('cont' => 'b', 'meta' => 'hi there');\n$files['c'] = array('cont' => 'c', 'meta' => array('hi', 'there'));\n$files['d'] = array('cont' => 'd', 'meta' => array('hi'=>'there','foo'=>'bar'));\ninclude 'files/phar_test.inc';\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\n$phar = new Phar($fname);\n$phar->startBuffering();\n$phar['a']->setMetadata(42);\n$phar['b']->setMetadata(NULL);\n$phar['c']->setMetadata(array(25, 'foo'=>'bar'));\n$phar['d']->setMetadata(true);\nforeach($files as $name => $cont) {\n    var_dump($phar[$name]->getMetadata());\n}\n$phar->stopBuffering();\nunset($phar);\n$phar = new Phar($fname);\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\nforeach($files as $name => $cont) {\n    var_dump($phar[$name]->getMetadata());\n}\n?>")).toMatchSnapshot();
  });
});
