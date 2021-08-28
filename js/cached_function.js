// cached version of the pure function
function cached(fn) {
    const cached = Object.create(null);

    return function chchedFn(str) {
        const hit = cached[str];
        if (hit) {
            return cached[hit];
        }

        return hit || (cached[str] = fn(str));
    }
}

function capitalize(str) {
    console.log('called capitalize for ', str);
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

const cachedCapitalize = cached(capitalize);
cachedCapitalize('sumon');
cachedCapitalize('sumon');
cachedCapitalize('sumon');
cachedCapitalize('sumon');
cachedCapitalize('salma');
cachedCapitalize('sumon');