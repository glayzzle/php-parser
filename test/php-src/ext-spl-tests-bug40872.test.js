// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug40872.phpt
  it("Bug #40872 (inconsistency in offsetSet, offsetExists treatment of string enclosed integers)", function () {
    expect(parser.parseCode("<?php\n    class Project {\n        public $id;\n        function __construct($id) {\n            $this->id = $id;\n        }\n    }\n    class ProjectsList extends ArrayIterator {\n        public function add(Project $item) {\n            $this->offsetSet($item->id, $item);\n        }\n    }\n    $projects = new ProjectsList();\n    $projects->add(new Project('1'));\n    $projects->add(new Project(2));\n    var_dump($projects->offsetExists(1));\n    var_dump($projects->offsetExists('2'));\n?>")).toMatchSnapshot();
  });
});
