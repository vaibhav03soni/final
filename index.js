function openPopup() {
    document.getElementById("registration-popup").classList.remove("hidden");
}
function closePopup() {
    document.getElementById("registration-popup").classList.add("hidden");
}
//terpist start
 function toggleSearch() {
    const searchDiv = document.getElementById("advanced-search");
    searchDiv.classList.toggle("hidden");
  }

  function searchTherapists() {
    const name = document.getElementById("search-name").value;
    const type = document.getElementById("search-type").value;
    const distance = document.getElementById("search-distance").value;
    const location = document.getElementById("search-location").value;

    const resultsContainer = document.getElementById("search-results");

    // Dummy Results (Replace with dynamic results from API later)
    resultsContainer.innerHTML = `
      <div class="result-row">👤 <strong>Dr. Priya Mehta</strong> - ${type || "Psychologist"}, ${distance || "Within 10 KMs"}, ${location}</div>
      <div class="result-row">👤 <strong>Mr. Arjun Das</strong> - ${type || "Counselor"}, ${distance || "Within 10 KMs"}, ${location}</div>
    `;
  }
  // terpist end
  // testominor slid start
    const track = document.querySelector('.testimonial-track');
    const prevBtn = document.querySelector('.slide-btn.prev');
    const nextBtn = document.querySelector('.slide-btn.next');
    const cards = document.querySelectorAll('.testimonial-card');

    let index = 0;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20; // card width + gap
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (index < cards.length - 1) {
            index++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    // Optional: Responsive adjustment on window resize
    window.addEventListener('resize', updateSlider);
    // fq start
     const headers = document.querySelectorAll('.accordion-header');
   headers.forEach(header => {
       header.addEventListener('click', () => {
           const openContent = header.nextElementSibling;
           const isOpen = openContent.classList.contains('open');

           // Close all open items
           document.querySelectorAll('.accordion-content').forEach(c => {
               c.style.maxHeight = null;
               c.classList.remove('open');
           });

           document.querySelectorAll('.accordion-header').forEach(h => {
               h.classList.remove('active');
           });

           // Toggle current
           if (!isOpen) {
               openContent.style.maxHeight = openContent.scrollHeight + "px";
               openContent.classList.add('open');
               header.classList.add('active');
           }
       });
   });