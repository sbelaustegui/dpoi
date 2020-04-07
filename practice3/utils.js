/**
 * Utils
 * This is a utility file with different util functions.
 */


// Removes keys from an Object and return a new copy of it
export const destruct = (obj, keys) => keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});

// This method hides the Spinner
export const hideLoader = () => {
    document.getElementsByClassName('fa-spinner')[0].className += ' hide';
};

// This method shows the Spinner
export const showLoader = () => {
    document.getElementsByClassName('fa-spinner')[0].className -= ' hide';
};
