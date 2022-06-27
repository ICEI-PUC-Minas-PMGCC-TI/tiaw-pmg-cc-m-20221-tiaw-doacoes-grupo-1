const scrollDiv = document.querySelector('#carsHorizontal');


scrollDiv.onwheel = (e) => {
    const scrollDivAria = scrollDiv.getAttribute('aria-details');
    
    if(scrollDivAria === 'scroll-h' && window.innerWidth > 550) {
        e.preventDefault();
        scrollDiv.scrollLeft += (e.deltaY);
    }
}
