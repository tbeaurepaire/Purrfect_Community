// Array holding the pictures, answers, links and alt for guessing without Pictures
let gameData = [
 { 
  src: "Pictures/abyssinian.jpg",
  answer: "Abyssinian", 
  alt: "Strikingly wild looking, this cat gives the impression of an extreme athlete who has just wandered in from the jungle. Lithe and long, with a lean, muscular build and moderately wedge-shaped head and large, almond shaped eyes...",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/abyssinian" 
 },
 { 
  src: "../Pictures/American-Wirehair.jpg", 
  answer: "American Wirehair Cat", 
  alt: "Cobby and rounded, with a robust but not excessive build. This is an attractive, intelligent cat. The coat as the name suggests, is their defining feature, with a hard, wire texture to the dense fur.They have large, round eyes, an open and curious expression, a neat, muscular body and full, rounded paws.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/american-wirehair" 
 },
 { 
  src: "../Pictures/Asian.jpg", 
  answer: "Asian", 
  alt: "this is a medium-sized cat built on rather long, lean lines. Males are more solid and muscular, while females can be described as dainty. They have a moderate wedge-shaped head with medium sized ears and large eyes. Their coat is short and fine and lies close to the skin, and especially when in solid colours, looks almost as though the cat has been painted in watercolours, giving them an unusual and beautiful appearance. They can also come in tabby and patterned with white. ",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/asian" 
 },
 { 
  src: "../Pictures/Australian-Mist.jpg", 
  answer: "Australian Mist", 
  alt: "The is an attractive medium sized cat with a round head and large, expressive eyes. This is a very moderate cat, well balanced in body and build, with a pretty and very friendly face. The coat is short, dense and glossy, with all patterns being soft and somewhat blurred into the background colour, giving the cat an unusual look. This cat has green eyes of varying shades.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/australian-mist" 
 },
 { 
  src: "../Pictures/Balinese.jpg", 
  answer: "Balinese", 
  alt: "Graceful, slender and elegant, this cat is a medium sized cat with a fine-boned build and a semi-long haired, silky coat. Unlike most long haired cats, their coat has no undercoat, meaning this is a close fitting, silky coat, not a voluminous fluffy coat, and it carries much less risk of matting. Resembling very closely the Siamese, this cat has the same striking features of large ears, wedge shaped head and long, lithe body (more extreme in the modern type, less so in the old type).",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/balinese" 
 },
 { 
  src: "../Pictures/Bengal.jpg", 
  answer: "Bengal", 
  alt: "This is a sleek, muscular cat with a wild appearance, enhanced by the bold marbling and spotting on their thick, luxurious coat. Despite their striking appearance, physically there is nothing extreme about their build or structure, as this is a well-balanced cat without any exaggerated features, smallish ears, wedge shaped head, neat paws and athletic outline. ",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/bengal" 
 },
 { 
  src: "../Pictures/Birman.jpg", 
  answer: "Birman", 
  alt: "This is another ‘colour point’ cat, with a pale cream to white coat over the body, and coloured points, i.e., the face, ears, legs and tail. This cat is a semi long-haired cat with a silky soft, luxuriant coat, beautiful blue eyes and pure white feet (gloves on the front paws, socks on the back.) Under the fur this is a moderately built cat, medium to large with a well-muscled body, rounded face and neat ears.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/birman" 
 },
 { 
  src: "../Pictures/Bombay.jpg", 
  answer: "Bombay", 
  alt: "Like a panther in miniature, this is an elegant yet strong cat that’s curious, active, and highly affectionate. They love spending time with their owners and can be very social with other people too. As extroverted as dogs, this cat breed is perfect for even first-time owners!",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/bombay" 
 },
 { 
  src: "../Pictures/British-Longhair.jpg", 
  answer: "British Longhair", 
  alt: "This is a medium sized, short, muscular cat breed, with a wide chest and a love for relaxing. Underneath an impressive straight, resilient and weather-proof coat, there is a compact and powerful cat, with a broad chest, short, strong legs and neat round paws. The coat is semi-longhair and should be dense, with tufted feet and plenty of fur on the ears.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/british-longhair" 
 },
 { 
  src: "../Pictures/British-Shorthair.jpg", 
  answer: "British Shorthair", 
  alt: "One of the oldest recognized cat breeds, is generous, dynamic, and as attention-loving as a cat can be. If you’re in the vicinity of this cat, be sure that they’ll do anything in their power to grab your attention and get some much-appreciated affection from you. ",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/british-shorthair" 
 },
 { 
  src: "../Pictures/Burmese.jpg", 
  answer: "Burmese", 
  alt: "One look at them and you’ll be charmed! Apart from their impressive looks, this cat is friendly and social, as well as highly clever so if you’re looking for a cat that can easily mesh into most families, this breed is perfect for you. ",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/burmese" 
 },
 { 
  src: "../Pictures/Burmilla.jpg", 
  answer: "Burmilla", 
  alt: "This medium-build short haired cat is sturdy and well-muscled, with males being quite robust, and females more elegant and daintier. Their head is gently rounded with a moderate wedge-shaped face and wide set ears. Eyes are large, slightly almond shaped and expressive and may be any shade from gold to green. Their coat is dense and short with a pale undercoat and distinctive dark tipping to the ends of the hairs giving the cat a silvery look which is enhanced by dark rims around the eyes and a distinct M marking on the forehead. There are a number of accepted patterns and colours within the breed. ",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/burmilla" 
 },
 { 
  src: "../Pictures/Chinchilla.jpg?itok=hBQNT106", 
  answer: "Chinchilla", 
  alt: " This is colour-type of Persian cat, with the same luxuriant long coat and large round eyes as the Persian. Although considered a Persian type, they typically have a moderate construction, with a more prominent muzzle, and a lighter build than the Persian. Despite this, they are a cobby, compact cat of some substance, with large paws and a chunky body.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/chinchilla" 
 },
 { 
  src: "../Pictures/Exotic-Shorthair.jpg", 
  answer: "Exotic Shorthair", 
  alt: "Medium sized and stockily built, this cat has a round, broad head, somewhat large in proportion to the body, with large round eyes and short muzzle that gives them a distinctive and somewhat grumpy expression. The ears are small and set wide which further accentuates the size and roundness of the face. The body is compact, with short sturdy legs, large round paws with tufted toes and a short, bushy tail. The coat is short, extremely thick and luxuriant, with a soft, dense undercoat.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/exotic-shorthair" 
 },
 { 
  src: "../Pictures/Maine-Coon.jpg", 
  answer: "Maine Coon", 
  alt: "This is a massive cat with a powerful muscular athletic body in keeping with their impressive size. They have large, pointed ears held wide and tall and an intelligent expression. The coat is long and thick and consists of an undercoat covered by a substantial glossy, waterproof top coat and have attractive tufts on ears and paws. Their tails are spectacular and should be at least as long as their body so they can wrap it around their body for extra insulation.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/maine-coon" 
 },
 { 
  src: "../Pictures/Ragdoll.jpg", 
  answer: "Ragdoll", 
  alt: "Docile and sweet, this cat is popular with families and individuals alike given their friendly demeanour and laid-back nature. They will happily assume the role of best buddy around anyone and will love to spend their day playing with their owners.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/ragdoll" 
 },
 { 
  src: "../Pictures/Russian-Blue.jpg", 
  answer: "Russian Blue", 
  alt: "This is an attractive, medium sized cat with a moderately ‘foreign’ type body (‘foreign’ in cat terms means ‘like a Siamese cat’), long and lithe and very muscular, yet graceful. The head is a wedge shape but the wide cheekbones give this cat an open, smiling face framed with large flared ears. Legs and long and lean with neat, small, oval shaped paws. They are famous for their dense, thick and plush coat.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/russian-blue" 
 },
 { 
  src: "../Pictures/Siamese.jpg", 
  answer: "Siamese", 
  alt: "Long and lithe, words like elegant and graceful were invented for this cat. This is a striking breed, recognisable even by those who know nothing about cats or even dislike cats. They are affectionate and social and can easily adapt to family life but can also be very curious and energetic so be prepared to keep them entertained with games of fetch or long walks around the neighbourhood.",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/siamese" 
 },
 { 
  src: "../Pictures/Siberian-Forest.jpg", 
  answer: "Siberian Forest", 
  alt: "Affectionate and loyal animals, this cat makes for a great companion as they get along really well with everybody, kids and other pets included. Besides their stunning looks, they adore cuddling, and their personality is so sweet-natured that you’ll love to have them around all the time. ",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/siberian-forest" 
 },
 { 
  src: "../Pictures/Singapura.jpg", 
  answer: "Singapura", 
  alt: "This is a pretty little cat, elegant, muscular and lithe but not extreme or harshly angular in build. Their head is rounded with a short broad muzzle, eyes are large, almond shaped, and come in hazel, green or yellow, with a strong black outline or eyeliner. Their coat is short and smooth, with agouti banded hairs that give the cat an attractively shaded coat. ",
  link: "https://www.purina.co.uk/find-a-pet/cat-breeds/singapura" 
 }
];

// current image index
let currentIndex = 0;
let carouselInstance;

// Initialize the carousel HTML elements on page load
function initCarousel() {
  let carouselInner = document.getElementById("carouselInner");
  carouselInner.innerHTML = "";

  gameData.forEach((item, index) => {
    let activeClass = "";
    if (index === 0) {
      activeClass = "active";
    }

   let carouselItemHTML = '<div class="carousel-item ' + activeClass + '">';
	  carouselItemHTML += '<a href="' + item.link + '" target="_blank">';
	carouselItemHTML += '<img src="' + item.src + '" class="d-block w-100 rounded" alt="' + item.alt + '" style="max-height: 300px; width: 100%; object-fit: contain; background-color: #f8f9fa;">';
	carouselItemHTML += '</a>';
	carouselItemHTML += '</div>';

    carouselInner.innerHTML += carouselItemHTML;
  });

  // Initialize Carousel 
  let myCarousel = document.getElementById('catCarousel');
  carouselInstance = new bootstrap.Carousel(myCarousel);

  // Listen to Bootstrap's native slide event to keep index synced
  myCarousel.addEventListener('slide.bs.carousel', function (event) {
    currentIndex = event.to;
    updateDescription();
  });

  updateDescription();
}


function updateDescription() {
  let descriptionBox = document.getElementById("imageDescription");
  let messageElement = document.getElementById("resultMessage");
  let guessBox = document.getElementById("guessInput");

  descriptionBox.textContent = gameData[currentIndex].alt;
  messageElement.textContent = "";
  guessBox.value = "";
}


function nextImage() {
  currentIndex = currentIndex + 1;
  
  if (currentIndex >= gameData.length) {
    currentIndex = 0;
  }
  
  carouselInstance.to(currentIndex);
}

// Function for the "Prev" button
function prevImage() {
  currentIndex = currentIndex - 1;
  
  if (currentIndex < 0) {
    currentIndex = gameData.length - 1;
  }
  
  carouselInstance.to(currentIndex);
}

// Function to check the user's guess
function checkGuess() {
  let guessBox = document.getElementById("guessInput");
  let userGuess = guessBox.value.trim().toLowerCase();
  let correctAnswer = gameData[currentIndex].answer.toLowerCase();
  let messageElement = document.getElementById("resultMessage");

  if (userGuess === "") {
    messageElement.style.color = "orange";
    messageElement.textContent = "Please enter a guess!";
    return;
  }

  if (userGuess === correctAnswer) {
    messageElement.style.color = "green";
    messageElement.textContent = "Correct! 🎉";
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "Incorrect, try again!";
  }
}

// initialization when window loads
window.onload = initCarousel;
