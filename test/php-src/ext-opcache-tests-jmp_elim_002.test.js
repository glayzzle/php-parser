// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jmp_elim_002.phpt
  it("Incorrect empty basic block elimination", function () {
    expect(parser.parseCode("<?php\nfunction wp_get_archives( $args = '' ) {\n    $defaults = array(\n        'type' => 'monthly', 'limit' => '',\n        'format' => 'html', 'before' => '',\n        'after' => '', 'show_post_count' => false,\n        'echo' => 1, 'order' => 'DESC',\n    );\n    $r = wp_parse_args( $args, $defaults );\n    if ( ! empty( $r['limit'] ) ) {\n        $r['limit'] = absint( $r['limit'] );\n        $r['limit'] = ' LIMIT ' . $r['limit'];\n    }\n    $archive_date_format_over_ride = 0;\n    $archive_day_date_format = 'Y/m/d';\n    if (!$archive_date_format_over_ride ) {\n        $archive_day_date_format = get_option( 'date_format' );\n    }\n    if ( $r['echo'] ) {\n        echo $output;\n    } else {\n        return $output;\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
