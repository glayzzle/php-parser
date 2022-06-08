// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_metadata_read.phpt
  it("Phar with metadata (read)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$pmeta = 'hi there';\n$files['a'] = array('cont' => 'a');\n$files['b'] = array('cont' => 'b');\n$files['c'] = array('cont' => 'c', 'meta' => array('hi', 'there'));\n$files['d'] = array('cont' => 'd', 'meta' => array('hi'=>'there','foo'=>'bar'));\ninclude 'files/phar_test.inc';\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\n$phar = new Phar($fname);\nvar_dump($phar->hasMetaData());\nvar_dump($phar->getMetaData());\nvar_dump($phar->delMetaData());\nvar_dump($phar->getMetaData());\nvar_dump($phar->delMetaData());\nvar_dump($phar->getMetaData());\nforeach($files as $name => $cont) {\n    echo \"  meta $name\\n\";\n    var_dump($phar[$name]->hasMetadata());\n    var_dump($phar[$name]->getMetadata());\n    var_dump($phar[$name]->delMetadata());\n    var_dump($phar[$name]->getMetadata());\n}\nunset($phar);\nforeach($files as $name => $cont) {\n    var_dump(file_get_contents($pname.'/'.$name));\n}\n?>")).toMatchSnapshot();
  });
});
