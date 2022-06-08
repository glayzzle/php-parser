// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/call_function_from_method.phpt
  it("Call to date function from a method and call to date method from call_user_func", function () {
    expect(parser.parseCode("<?php\nclass Date {\n    public function __construct($in) {\n        $this->date = date_create($in);\n    }\n    public function getYear1() {\n        return date_format($this->date, 'Y');\n    }\n    public function getYear2() {\n        return call_user_func([$this->date, 'format'], 'Y');\n    }\n}\n$d = new Date('NOW');\nvar_dump($d->getYear1());\nvar_dump($d->getYear2());\n?>")).toMatchSnapshot();
  });
});
