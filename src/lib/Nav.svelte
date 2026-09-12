import { useTheme } from '$lib/theme';
import { visits } from '$lib/stores';

let theme = useTheme();
let count = $derived($visits);
