var back_redirect_back_link = 'https://meusconteudos.com/promo/';

history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

window.onpopstate = function() {
    setTimeout(function() {
        if (location.href.indexOf('#') == -1) {
            location.href = back_redirect_back_link + location.search;
        }
    }, 1);
};
