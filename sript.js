// Sample data for recommended content
const recommendedContent = {
  anxiety: [
    // Anxiety content here

    { title: "How To Cope With Coronavirus Anxiety and Stress", url: "https://www.psychologytoday.com/us/blog/call/202003/how-cope-coronavirus-anxiety-and-stress" },
    { title: "Anxiety and Panic", url: "https://www.webmd.com/anxiety-panic/anxiety-attack-symptoms" },
    { title: "3 Effective Techniques for Alleviating Worry", url: "https://www.psychologytoday.com/us/blog/turning-straw-gold/201606/3-effective-techniques-alleviating-worry" },
    { title: "5, 4, 3, 2, 1: Countdown to take control of anxiety", url: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/tips-to-help-ease-anxiety" },
    { title: "Should I get help for my anxiety?", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTM5YzMyNC9wb2RjYXN0L3Jzcw/episode/MDRhZWY5NmQtNzA0YS00ZTdiLThmMzItMDQ4MGY1MjVjNTU0?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQigc" },
    { title: "What is Illness Anxiety Disorder?", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS93NlBhdVFZSQ/episode/aHR0cHM6Ly93d3cucG9kdHJhYy5jb20vcHRzL3JlZGlyZWN0Lm1wMy9tZWRpYS5ibHVicnJ5LmNvbS9zYXZ2eS90cmFmZmljLm9tbnkuZm0vZC9jbGlwcy9hYWVhNGU2OS1hZjUxLTQ5NWUtYWZjOS1hOTc2MDE0NjkyMmIvOWQ4OTYxOTEtYzc5Ni00Mjg3LWI5YzItYWIxYjAxNWFkMDg3LzE2MjI2MGVlLWVmYjctNDhkNS05NDI4LWFkOTcwMTY5YjI5My9hdWRpby5tcDM?sa=X&ved=0CAUQkfYCahcKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQAQ" },
    { title: "260: Loss of Appetite with Anxiety & Battling with a Negative Body Image", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9oYXJkY29yZXNlbGZoZWxwLmxpYnN5bi5jb20vcnNz/episode/YTA1YmMxZWItMTZjYi00NzY0LThmN2MtMzdjZDViZTk1MjM2?sa=X&ved=0CAUQkfYCahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQuxQ" },
    { title: "02: How Is Anxiety Affecting The Main Aspects Of Your Life?", url: "https://podcasts.google.com/feed/aHR0cDovL2FueGlldHlndXlwb2RjYXN0LmxpYnN5bi5jb20vcnNz/episode/aHR0cDovL2FueGlldHlleGl0LmNvbS8_cD05MDEy?sa=X&ved=0CAUQkfYCahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQ0zE" },
 
  ],
  pdd: [
    // PDD content here
    { title: "Introducing Depresh Mode with John Moe: Joel Kim Booster Is In A Pit", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5wdWJsaWNyYWRpby5vcmcvcHVibGljX2ZlZWRzL3RoZS1oaWxhcmlvdXMtd29ybGQtb2YtZGVwcmVzc2lvbi9pdHVuZXMvcnNz/episode/L2FtZXJpY2FucHVibGljbWVkaWEvcG9kY2FzdHMvdGh3b2QvMjAyMS8wOC9od29kXzIwMjEwODA0XzEyOC5tcDM?sa=X&ved=0CAgQuIEEahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQ8Dk" },
    { title: "Interviews Vincent Wales | Author & Co-Host of The Psych Central Show", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2FsbGV2aW4xOC9mZWVkLnhtbA/episode/YWxsZXZpbjE4LnBvZGJlYW4uY29tL2FsLWludGVydmlld3MtdmluY2VudC13YWxlcy1hdXRob3ItY28taG9zdC1vZi10aGUtcHN5Y2gtY2VudHJhbC1zaG93LTRjNDlhYzg5ZjA2YzNiMGI4MTUwNjNmMTI2ZTNmOTVl?sa=X&ved=0CAgQuIEEahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQpDo" },
    { title: "Ep 240. You're Not Broken with Dr. Sarah Woodhouse", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9ub3Rhbm90aGVyYW54aWV0eXNob3cubGlic3luLmNvbS9yc3M/episode/YzExZDlhMjktZjQzNy00MDVjLTk3NmMtOTJhMDhlNjlhOThm?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQkAw" },
    { title: "7 physical effects of depression", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS93NlBhdVFZSQ/episode/NmI2ZDk2MGEtZWZkYy00Y2MwLTkxYTItYjZiODgyZGI5Y2Fi?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQpg4" },
    { title: "Persistent Depressive Disorder (Dysthymic Disorder)", url: "https://www.nimh.nih.gov/health/statistics/persistent-depressive-disorder-dysthymic-disorder" },
    { title: "Seasonal affective disorder: Not just the winter blues", url: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/seasonal-affective-disorder-not-just-the-winter-blues" },
    { title: "Major Depression or Dysthymia?", url: "https://www.webmd.com/depression/depression-or-dysthymia" },
    { title: "Persistent Depressive Disorder (Dysthymia)", url: "https://www.psychologytoday.com/us/conditions/persistent-depressive-disorder-dysthymia" },
  ],
  stress: [
    // Stress content here
    { title: "Getting to Know Your Brain: Dealing with Stress", url: "https://www.nimh.nih.gov/news/media/2021/getting-to-know-your-brain-dealing-with-stress" },
    { title: "I’m So Stressed Out! Fact Sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" },
    { title: "Speaking of Psychology: Why Gen Z is feeling so stressed, with Emma Adam, PhD", url: "https://www.apa.org/news/podcasts/speaking-of-psychology/gen-z-stress" },
    { title: "How To Cope With Coronavirus Anxiety and Stress", url: "https://www.psychologytoday.com/us/blog/call/202003/how-cope-coronavirus-anxiety-and-stress" },
    { title: "Speaking of Psychology: Why Gen Z is feeling so stressed, with Emma Adam, PhD", url: "https://www.apa.org/news/podcasts/speaking-of-psychology/gen-z-stress" },
    { title: "I’m So Stressed Out! Fact Sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" },
    { title: "Getting to Know Your Brain: Dealing with Stress", url: "https://www.nimh.nih.gov/news/media/2021/getting-to-know-your-brain-dealing-with-stress" },
    { title: "Toxic bonds that might need breaking", url: "https://podcasts.google.com/feed/aHR0cHM6Ly90aGVvdmVyd2hlbG1lZGJyYWluLmxpYnN5bi5jb20vcnNz/episode/OWU2ZTI2MmEtYTBlYS00ZTkzLTkwYzQtY2UzNWNiOTk3MDE0?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQjAg" },
    { title: "EP4: Award-winning Author & Occupational Psychologist, Fiona Murden", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzLzYzZTExZmE1MDA5MWFmMDAxMTJkMjFiYQ/episode/QnV6enNwcm91dC03NDU5MDI0?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQrwc" },
    { title: "939: Flying with Confidence: Practical Steps to Overcome Your Fear", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbnhpZXR5Y29hY2hlcy5saWJzeW4uY29tL2FueGlldHljb2FjaGVz/episode/ZjkxOTA1ODYtMTgyYy0xMWVlLTg3OTUtOTc4Yzc3ZmFmMjBk?sa=X&ved=0CAIQuIEEahcKEwiYyNWvoZOAAxUAAAAAHQAAAAAQLA" },
    { title: "Howto Let Go of Coping Mechanisms That Don’t Serve You", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMjc3MWMzYy9wb2RjYXN0L3Jzcw/episode/MTdlZjE1M2UtNzk4Yy00NTM2LTliZmQtM2Q0M2Q5Njc2NDFm?sa=X&ved=0CAUQkfYCahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQ0Do" },
  ],

};

// Function to get random recommended content based on category
function getRandomRecommended(category, count) {
  const categoryContent = recommendedContent[category];
  if (!categoryContent) return [];
  const shuffledContent = categoryContent.slice().sort(() => 0.5 - Math.random());
  return shuffledContent.slice(0, count);
}

// Function to handle the click event on content links
function handleContentClick(event) {
  event.preventDefault();
  const contentLink = event.target;
  const category = contentLink.dataset.category;

  // Open the link's URL in a new tab
  window.open(contentLink.href, "_blank");

  // Update the recommended list with new random content
  updateRecommendedList(category);
}

// Function to update the recommended list with random content
function updateRecommendedList(category) {
  const recommendedList = document.getElementById("recommended-list");
  recommendedList.innerHTML = ""; // Clear existing recommended content
  const randomRecommended = getRandomRecommended(category, 3); // Display 3 recommended contents
  randomRecommended.forEach((item) => {
    const recommendedItem = document.createElement("li");
    const recommendedLink = document.createElement("a");
    recommendedLink.href = item.url;
    recommendedLink.textContent = item.title;
    recommendedItem.appendChild(recommendedLink);
    recommendedList.appendChild(recommendedItem);
  });
}


// Add click event listeners to all content links
const contentLinks = document.getElementsByClassName("content-link");
for (const link of contentLinks) {
  link.addEventListener("click", handleContentClick);
}


// Update the recommended list initially for the "anxiety" category
updateRecommendedList("anxiety");

// Function to update the recommended videos section with random content based on category
function updateRecommendedVideos(category) {
  const recommendedVideosContainer = document.querySelector(".recommended-container");
  recommendedVideosContainer.innerHTML = ""; // Clear existing recommended videos

  const randomRecommendedVideos = getRandomRecommended(category, 3); // Display 3 recommended videos
  randomRecommendedVideos.forEach((video) => {
    const recommendedItem = document.createElement("li");
    const recommendedLink = document.createElement("a");
    recommendedLink.href = video.url;
    recommendedLink.textContent = video.title;
    recommendedLink.target = "_blank"; // Open the link in a new tab
    recommendedItem.appendChild(recommendedLink);
    recommendedVideosContainer.appendChild(recommendedItem);
  });
}

// Add click event listener to each video link to handle video link clicks
const videoLinks = document.querySelectorAll(".video-container");
videoLinks.forEach((videoLink) => {
  videoLink.addEventListener("click", (event) => {

    const category = videoLink.dataset.category;
    updateRecommendedVideos(category);
  });
});

// Initially, update the recommended videos section for the "pdd" category (or any other default category)
updateRecommendedVideos("pdd");




