        // Put current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Simple reveal on scroll using jQuery
        function revealOnScroll() {
            $('.reveal').each(function () {
                var top = $(this).offset().top;
                var winTop = $(window).scrollTop();
                var winHeight = $(window).height();
                if (winTop + winHeight - 80 > top) {
                    $(this).addClass('visible');
                }
            })
        }
        $(document).ready(function () {
            revealOnScroll();
            $(window).on('scroll', revealOnScroll);

            // Navbar link active state on click
            $('.nav-link').on('click', function () {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            });

            // Smooth nav highlight on scroll (update active link)
            $(window).on('scroll', function () {
                var pos = $(document).scrollTop() + 120;
                $('section').each(function () {
                    var top = $(this).offset().top;
                    var id = $(this).attr('id');
                    if (pos >= top) {
                        $('.nav-link').removeClass('active');
                        $('.nav-link[href="#' + id + '"]').addClass('active');
                    }
                })
            });

            // small animation on hero headline
            setTimeout(function () {
                $('.headline').addClass('visible');
            }, 240);

        });