import { useEffect, useState } from "react";

const useDebounce = (val, delay = 600) => {
	const [debouncedVal, setDebouncedVal] = useState(val);

	useEffect(() => {
		const timerRef = setTimeout(() => {
			setDebouncedVal(val);
		}, delay);
		return () => {
			clearTimeout(timerRef);
		};
	}, [val, delay]);

	return debouncedVal;
};

export default useDebounce;
