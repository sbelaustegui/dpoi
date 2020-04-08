/**
 * Utils
 * This is a utility file with different util functions.
 */


// Removes keys from an Object and return a new copy of it
export const destruct = (obj, keys) => keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});

// This method hides the Spinner
export const hideLoader = () => {
    document.getElementsByClassName('fa-spinner')[0].classList.add('hide');
};

// This method shows the Spinner
export const showLoader = () => {
    document.getElementsByClassName('fa-spinner')[0].classList.remove('hide');
};

// This method will return the first element matching the query selector
export const getClosestParentElementByQuery = (elem, selector) => {
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;
};
