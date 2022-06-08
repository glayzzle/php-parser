// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/serialize_property_tables.phpt
  it("Serialization of properties should not deal INDIRECT entries to userland", function () {
    expect(parser.parseCode("<?php\nclass MyArrayObject extends ArrayObject {\n    private $unused = 123;\n    public function __construct(array $array)\n    {\n        parent::__construct($array, 1);\n    }\n}\nclass MySplDoublyLinkedList extends SplDoublyLinkedList {\n    private $unused = 123;\n}\nclass MySplObjectStorage extends SplObjectStorage {\n    private $unused = 123;\n}\n$x = new MyArrayObject([]);\nvar_dump($x->__serialize());\n$x = new MySplDoublyLinkedList();\nvar_dump($x->__serialize());\n$x = new MySplObjectStorage();\nvar_dump($x->__serialize());\n?>")).toMatchSnapshot();
  });
});
