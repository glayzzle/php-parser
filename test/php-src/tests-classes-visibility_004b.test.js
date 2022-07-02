// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/visibility_004b.phpt
  it("ZE2 A redeclared method must have the same or higher visibility", function () {
    expect(parser.parseCode("<?php\nclass father {\n    function f0() {}\n    function f1() {}\n    public function f2() {}\n    protected function f3() {}\n    private function f4() {}\n}\nclass same extends father {\n    // overload fn with same visibility\n    function f0() {}\n    public function f1() {}\n    public function f2() {}\n    protected function f3() {}\n    private function f4() {}\n}\nclass fail extends same {\n    protected function f4() {}\n}\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
