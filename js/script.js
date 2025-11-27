document.addEventListener('DOMContentLoaded', () => {
    // Search Expansion
    const searchBtn = document.getElementById('search-btn');
    const searchPanel = document.getElementById('search-panel');
    const searchInput = document.getElementById('search-input');
    const searchSubmitBtn = document.getElementById('search-submit-btn');

    // Toggle Search Panel
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchPanel.classList.toggle('active');
        if (searchPanel.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Close search if clicked outside
    document.addEventListener('click', (e) => {
        if (!searchPanel.contains(e.target) && !searchBtn.contains(e.target)) {
            searchPanel.classList.remove('active');
        }
    });

    // Search Submit Action
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Redirect to search page (placeholder)
            window.location.href = 'search.html?q=' + encodeURIComponent(query);
        }
    }

    searchSubmitBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Mobile Menu Drawer
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    function openDrawer() {
        mobileMenuDrawer.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeDrawer() {
        mobileMenuDrawer.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileMenuToggle.addEventListener('click', openDrawer);
    closeDrawerBtn.addEventListener('click', closeDrawer);
    mobileMenuOverlay.addEventListener('click', closeDrawer);

    // Mobile Submenu Toggles (Smooth Animation)
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = toggle.parentElement.nextElementSibling;
            const icon = toggle.querySelector('i');

            if (submenu) {
                // Check if currently active
                const isActive = submenu.classList.contains('active');

                // Close all other submenus (optional, but good for accordion style)
                // document.querySelectorAll('.mobile-submenu').forEach(s => {
                //     s.classList.remove('active');
                //     s.style.maxHeight = null;
                // });
                // document.querySelectorAll('.submenu-toggle i').forEach(i => {
                //     i.style.transform = 'rotate(0deg)';
                // });

                if (!isActive) {
                    submenu.classList.add('active');
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    submenu.classList.remove('active');
                    submenu.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    });

    // Sticky Header Effect (Optional, but good for UX)
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.height = '70px'; // Shrink slightly
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.height = '80px';
        }
    });
    // Hero Slider Initialization
    const heroSlider = new Swiper('.hero-slider .swiper-container', {
        loop: true,
        // autoplay: {
        //     delay: 7000,
        //     disableOnInteraction: false,
        // },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
