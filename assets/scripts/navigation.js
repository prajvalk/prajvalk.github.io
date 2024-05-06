var isNavOpen = false;

function toggleNav() {
    if(isNavOpen) {
        $('#nav').css('display', 'none');
        document.documentElement.style.overflow = 'auto';
        isNavOpen = false;
    } else {
        $('#nav').css('display', 'flex');
        document.documentElement.style.overflow = 'hidden';
        isNavOpen = true;
    }
}