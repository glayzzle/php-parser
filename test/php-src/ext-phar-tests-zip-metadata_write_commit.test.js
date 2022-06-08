// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/metadata_write_commit.phpt
  it("Phar with meta-data (write) zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$f2name = __DIR__ . '/files/metadata.phar.zip';\n$pname = 'phar://' . $fname;\n$p2name = 'phar://' . $f2name;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = array('cont' => 'a');\n$files['b'] = array('cont' => 'b', 'meta' => 'hi there');\n$files['c'] = array('cont' => 'c', 'meta' => array('hi', 'there'));\n$files['d'] = array('cont' => 'd', 'meta' => array('hi'=>'there','foo'=>'bar'));\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($p2name.'/'.$name));\n}\ncopy($f2name, $fname);\n$phar = new Phar($fname);\n$phar->startBuffering();\n$phar['a']->setMetadata(42);\n$phar['b']->setMetadata(NULL);\n$phar['c']->setMetadata(array(25, 'foo'=>'bar'));\n$phar['d']->setMetadata(true);\n$phar->setMetadata('hi');\nforeach($files as $name => $cont) {\n    var_dump($phar[$name]->getMetadata());\n}\n$phar->stopBuffering();\nunset($phar);\n$phar = new Phar($fname);\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\nforeach($files as $name => $cont) {\n    var_dump($phar[$name]->getMetadata());\n}\nvar_dump($phar->getMetadata());\n?>")).toMatchSnapshot();
  });
});
