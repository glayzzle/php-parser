// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/032.phpt
  it("filter_var_array()", function () {
    expect(parser.parseCode("<?php\n$data = array(\n    'product_id'    => 'libgd<script>',\n    'component'     => '10dhsajkkdhk <do>',\n    'versions'      => '2.0.33',\n    'testscalar'    => array('2','23','10','12'),\n    'testarray'     => '2',\n);\n$args = array(\n    'product_id'    => FILTER_SANITIZE_ENCODED,\n    'component'     => array(//'filter' => FILTER_VALIDATE_INT,\n                             'flags'    => FILTER_FORCE_ARRAY,\n                             'options'  => array(\"min_range\"=>1, \"max_range\"=>10)\n                        ),\n    'versions'      => array(\n                            'filter' => FILTER_SANITIZE_ENCODED,\n                            'flags'  => FILTER_REQUIRE_SCALAR,\n                            ),\n    'doesnotexist'  => FILTER_VALIDATE_INT,\n    'testscalar'    => FILTER_VALIDATE_INT,\n    'testarray' => array(\n                            'filter' => FILTER_VALIDATE_INT,\n                            'flags'  => FILTER_FORCE_ARRAY,\n                        )\n);\n$myinputs = filter_var_array($data, $args);\nvar_dump($myinputs);\n?>")).toMatchSnapshot();
  });
});
