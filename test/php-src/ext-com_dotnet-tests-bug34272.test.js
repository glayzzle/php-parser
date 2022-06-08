// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug34272.phpt
  it("Bug #34272 (empty array onto COM object blows up)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntry {\n    $dict = new COM(\"Scripting.Dictionary\");\n    $dict->add('foo', array());\n    print sizeof($dict['foo']).\"\\n\";\n    $dict->add('bar', array(23));\n    print sizeof($dict['bar']).\" \\n\";\n} catch (Exception $e) {\n    print $e;\n}\n?>")).toMatchSnapshot();
  });
});
