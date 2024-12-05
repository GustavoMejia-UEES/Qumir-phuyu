<script>
    document.addEventListener("DOMContentLoaded", () => {
        const section = document.getElementById("thirdpath");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        }, { threshold: 0.5 }); // Cambia el porcentaje visible necesario

        observer.observe(section);
    });
</script>
