import { PRODUCTION } from "../core/environments";
import all from "../core/all";
import { terser } from "rollup-plugin-terser";

export default all(PRODUCTION, [
	terser({
		"format": {
			"comments": (_n, comment) => (/license/iu).test(comment.value)
		}
	})
]);
