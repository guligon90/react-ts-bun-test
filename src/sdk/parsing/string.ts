import { parseName } from "humanparser";

const filterCharsFromString = (str: string): string => {
	const lower = str.toLowerCase();
	const upper = str.toUpperCase();
	
    let res = "";
	  
	for (let i=0; i<lower.length; ++i) {
		if (lower[i] !== upper[i] || lower[i].trim() === "") {    
			let t = str[i];

			if (t !== undefined) {
				res += t + "";
			}
		}
	}
	
	return res;
}

const NameSanitizer = (rawFullName: string) => {
	let sanitized: string = rawFullName;

	const removeSpecialChars = () => {
		sanitized = sanitized ? filterCharsFromString(sanitized) : "";

		return sanitizer;
	};

	const capitalizeFirst = () => {
		sanitized = sanitized
            .trim()
            .toLowerCase()
            .split(" ")
            .map(item => item.trim())
            .filter(item => item !== "")
            .map(item => item.trim().charAt(0).toUpperCase() + item.trim().substring(1))
            .join(" ");

		return sanitizer;
	};
	
	const getSanitized = (): string => {
		return sanitized;
	};

	const sanitizer = {
		removeSpecialChars,
		capitalizeFirst,
		getSanitized,
	};

	return sanitizer;
}

const sanitizeFullName = (rawFullName: string) => {
	const sanitize = (name: string | undefined): string => name 
		? NameSanitizer(name).removeSpecialChars().capitalizeFirst().getSanitized()
		: "";

	const parsedName = parseName(rawFullName);

    console.log(parsedName);

	return `${sanitize(parsedName.firstName)} ${sanitize(parsedName.middleName)} ${sanitize(parsedName.lastName)}`;
}

export { filterCharsFromString, NameSanitizer, sanitizeFullName };
