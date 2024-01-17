let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => { 
    sections.forEach(sec => {
        let top =  window.scrollY;
        let offset = sec.offsetTop -150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {

                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                // document.querySelector('header nav a[href*='+ id +']').classList.add('active');
                // document.querySelector('header nav a [href*='+ id +']').classList.add('active'); 
                // document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    })
  }

  let typed = new Typed('#change-text', {
    strings : ['Flutter Developer', 'Frontend Developer','Mobile App Developer'],
    typepeed : 20,
    backspeed : 20,
    loop : true
 } ) 


//   <!-------------services-------------> 
 // Get all tab links and tab contents
var tabLinks = document.querySelectorAll('.tab-links');
var tabContents = document.querySelectorAll('.tab-contents');

// Add click event listener to each tab link
tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
        // Remove active class from all tab links and tab contents
        tabLinks.forEach(link => link.classList.remove('active-link'));
        tabContents.forEach(content => content.classList.remove('active-tab'));

        // Add active class to clicked tab link and corresponding tab content
        tabLink.classList.add('active-link');
        tabContents[index].classList.add('active-tab');
    });
});