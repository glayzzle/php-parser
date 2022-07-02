// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75573.phpt
  it("Bug #75573 (Segmentation fault in 7.1.12 and 7.0.26)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    var $_stdObject;\n    function __construct()\n    {\n        $this->_stdObject = new stdClass;\n    }\n    function &__get($property)\n    {\n        if (isset($this->_stdObject->{$property})) {\n            $retval =& $this->_stdObject->{$property};\n            return $retval;\n        } else {\n            return NULL;\n        }\n    }\n    function &__set($property, $value)\n    {\n        return $this->_stdObject->{$property} = $value;\n    }\n    function __isset($property_name)\n    {\n        return isset($this->_stdObject->{$property_name});\n    }\n}\nclass B extends A\n{\n    function &__get($property)\n    {\n        if (isset($this->settings) && isset($this->settings[$property])) {\n            $retval =& $this->settings[$property];\n            return $retval;\n        } else {\n            return parent::__get($property);\n        }\n    }\n}\n$b = new B();\n$b->settings = [ \"foo\" => \"bar\", \"name\" => \"abc\" ];\nvar_dump($b->name);\nvar_dump($b->settings);\n?>")).toMatchSnapshot();
  });
});
