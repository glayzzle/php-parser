// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_010.phpt
  it("Serialize() must return a string or NULL", function () {
    expect(parser.parseCode("<?php\nClass C implements Serializable {\n    public function serialize() {\n        return $this;\n    }\n    public function unserialize($blah) {\n    }\n}\ntry {\n    var_dump(serialize(new C));\n} catch (Exception $e) {\n    echo $e->getMessage(). \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
