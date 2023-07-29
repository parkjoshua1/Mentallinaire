// Sample data for recommended content
const recommendedContent = {
  anxiety: [
    // Anxiety content here

    { title: "How To Cope With Coronavirus Anxiety and Stress", 
    url: "https://www.psychologytoday.com/us/blog/call/202003/how-cope-coronavirus-anxiety-and-stress", type: "blog"
    },
    { title: "Anxiety and Panic", url: "https://www.webmd.com/anxiety-panic/anxiety-attack-symptoms", type: "blog" },
    { title: "3 Effective Techniques for Alleviating Worry", url: "https://www.psychologytoday.com/us/blog/turning-straw-gold/201606/3-effective-techniques-alleviating-worry", type: "blog" },
    { title: "5, 4, 3, 2, 1: Countdown to take control of anxiety", url: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/tips-to-help-ease-anxiety", type: "blog" },
    { title: "Should I get help for my anxiety?", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTM5YzMyNC9wb2RjYXN0L3Jzcw/episode/MDRhZWY5NmQtNzA0YS00ZTdiLThmMzItMDQ4MGY1MjVjNTU0?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQigc", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8s1y6vKJ8NxB58Yi1k4_yey929SNZjmnyeXeI4mXvcK5SMizI", type: "article" },
    { title: "What is Illness Anxiety Disorder?", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS93NlBhdVFZSQ/episode/aHR0cHM6Ly93d3cucG9kdHJhYy5jb20vcHRzL3JlZGlyZWN0Lm1wMy9tZWRpYS5ibHVicnJ5LmNvbS9zYXZ2eS90cmFmZmljLm9tbnkuZm0vZC9jbGlwcy9hYWVhNGU2OS1hZjUxLTQ5NWUtYWZjOS1hOTc2MDE0NjkyMmIvOWQ4OTYxOTEtYzc5Ni00Mjg3LWI5YzItYWIxYjAxNWFkMDg3LzE2MjI2MGVlLWVmYjctNDhkNS05NDI4LWFkOTcwMTY5YjI5My9hdWRpby5tcDM?sa=X&ved=0CAUQkfYCahcKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQAQ", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJCIx4MyYho-GzOFfD4azdyqPQ1S8UxYy-dca0occkHYkhpbQF", type: "article"},
    { title: "260: Loss of Appetite with Anxiety & Battling with a Negative Body Image", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9oYXJkY29yZXNlbGZoZWxwLmxpYnN5bi5jb20vcnNz/episode/YTA1YmMxZWItMTZjYi00NzY0LThmN2MtMzdjZDViZTk1MjM2?sa=X&ved=0CAUQkfYCahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQuxQ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8MfL0UYtrM6w2xlpmUjxyrjp2j9XQf641iBw9giwqIZabpo", type: "article"},
    { title: "02: How Is Anxiety Affecting The Main Aspects Of Your Life?", url: "https://podcasts.google.com/feed/aHR0cDovL2FueGlldHlndXlwb2RjYXN0LmxpYnN5bi5jb20vcnNz/episode/aHR0cDovL2FueGlldHlleGl0LmNvbS8_cD05MDEy?sa=X&ved=0CAUQkfYCahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQ0zE", image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCPXusguz7ndBz0L3stMm8c6UgFVlmBNpY_N5DQ8UkWnVgzinm", type: "article" },
    { title: "What is Anxiety?", url: "https://www.youtube.com/watch?v=BVJkf8IuRjE", image: "https://i.ytimg.com/vi/BVJkf8IuRjE/maxresdefault.jpg", type: "video"},
    { title: "How to stop feeling anxious about anxiety", url: "https://www.youtube.com/watch?v=ZidGozDhOjg", image: "https://media.licdn.com/dms/image/D4D22AQGO51RASTBC1w/feedshare-shrink_800/0/1684400020950?e=1692835200&v=beta&t=C77Fu8p4gikTO8gChUw4lQpsTlqLI2zB5k7dv_5ugTk", type: "video"},
    { title: "How our voices reveal anxiety", url: "https://www.ted.com/talks/jackie_gartner_schmidt_how_our_voices_reveal_anxiety", image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/355d671d-3ad1-41e8-9175-126cd27d8259/Jackie+Gartner-Schmidt.001.jpeg?quality=89&w=320", type: "video"},

 
  ],
  pdd: [
    // PDD content here
    { title: "Introducing Depresh Mode with John Moe: Joel Kim Booster Is In A Pit", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5wdWJsaWNyYWRpby5vcmcvcHVibGljX2ZlZWRzL3RoZS1oaWxhcmlvdXMtd29ybGQtb2YtZGVwcmVzc2lvbi9pdHVuZXMvcnNz/episode/L2FtZXJpY2FucHVibGljbWVkaWEvcG9kY2FzdHMvdGh3b2QvMjAyMS8wOC9od29kXzIwMjEwODA0XzEyOC5tcDM?sa=X&ved=0CAgQuIEEahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQ8Dk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRH6QFKcsOvzBKe8QZiVZbkYyBWINpKKLgZUmFb5dPsjlWaZxk", type: "article"},
    { title: "Interviews Vincent Wales | Author & Co-Host of The Psych Central Show", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2FsbGV2aW4xOC9mZWVkLnhtbA/episode/YWxsZXZpbjE4LnBvZGJlYW4uY29tL2FsLWludGVydmlld3MtdmluY2VudC13YWxlcy1hdXRob3ItY28taG9zdC1vZi10aGUtcHN5Y2gtY2VudHJhbC1zaG93LTRjNDlhYzg5ZjA2YzNiMGI4MTUwNjNmMTI2ZTNmOTVl?sa=X&ved=0CAgQuIEEahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQpDo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXZDsNXHT6OlJGts2CUwkkl7UOC1tl8_anBGwt2Ab9oF3Jcqp", type: "article" },
    { title: "Ep 240. You're Not Broken with Dr. Sarah Woodhouse", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9ub3Rhbm90aGVyYW54aWV0eXNob3cubGlic3luLmNvbS9yc3M/episode/YzExZDlhMjktZjQzNy00MDVjLTk3NmMtOTJhMDhlNjlhOThm?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQkAw", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmvfsX3sGCp32k-_C4mbnZEjKh2UMeATFCwiysiCBrBT0LviY", type: "article" },
    { title: "7 physical effects of depression", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS93NlBhdVFZSQ/episode/NmI2ZDk2MGEtZWZkYy00Y2MwLTkxYTItYjZiODgyZGI5Y2Fi?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQpg4", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJCIx4MyYho-GzOFfD4azdyqPQ1S8UxYy-dca0occkHYkhpbQF", type: "article" },
    { title: "Persistent Depressive Disorder (Dysthymic Disorder)", url: "https://www.nimh.nih.gov/health/statistics/persistent-depressive-disorder-dysthymic-disorder", type: "blog" },
    { title: "Seasonal affective disorder: Not just the winter blues", url: "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/seasonal-affective-disorder-not-just-the-winter-blues", type: "blog" },
    { title: "Major Depression or Dysthymia?", url: "https://www.webmd.com/depression/depression-or-dysthymia" },
    { title: "Persistent Depressive Disorder (Dysthymia)", url: "https://www.psychologytoday.com/us/conditions/persistent-depressive-disorder-dysthymia", type: "blog" },
    {title: "I had a black dog, his name was depresson", url: "https://www.youtube.com/watch?v=XiCrniLQGYc", image: "https://i.ytimg.com/vi/XiCrniLQGYc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARhqIGooajAP&rs=AOn4CLC6jNlPuKcFzQ21wWICDi-NETUAng", type: "video"},
    {title: "Mindfulness with Jon Kabat-Zinn", url: "https://www.youtube.com/watch?v=3nwwKbM_vJc", image: "https://i.ytimg.com/vi/3nwwKbM_vJc/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Ab4CgALwAYoCDAgAEAEYciBHKEQwDw==&rs=AOn4CLAw_n-OiNS69UfcC-uyIM0Yca5qWQ", type: "video"},
    {title: "Behavioral Activation: Treatment of Adolescent Depression", url: "https://www.youtube.com/watch?v=1R6-gLZZhYc", image: "https://i.ytimg.com/vi/1R6-gLZZhYc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp62iHdRsGethKjfyFU8KjZ6tkhQ", type: "video"},
  ],
  stress: [
    // Stress content here
    { title: "Getting to Know Your Brain: Dealing with Stress", url: "https://www.nimh.nih.gov/news/media/2021/getting-to-know-your-brain-dealing-with-stress", type: "blog" },
    { title: "I’m So Stressed Out! Fact Sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet", type: "blog" },
    { title: "Speaking of Psychology: Why Gen Z is feeling so stressed, with Emma Adam, PhD", url: "https://www.apa.org/news/podcasts/speaking-of-psychology/gen-z-stress", type: "blog" },
    { title: "How To Cope With Coronavirus Anxiety and Stress", url: "https://www.psychologytoday.com/us/blog/call/202003/how-cope-coronavirus-anxiety-and-stress", type: "blog" },
    { title: "Speaking of Psychology: Why Gen Z is feeling so stressed, with Emma Adam, PhD", url: "https://www.apa.org/news/podcasts/speaking-of-psychology/gen-z-stress", type: "blog" },
    { title: "I’m So Stressed Out! Fact Sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet", type: "blog" },
    { title: "Getting to Know Your Brain: Dealing with Stress", url: "https://www.nimh.nih.gov/news/media/2021/getting-to-know-your-brain-dealing-with-stress", type: "blog" },
    { title: "Toxic bonds that might need breaking", url: "https://podcasts.google.com/feed/aHR0cHM6Ly90aGVvdmVyd2hlbG1lZGJyYWluLmxpYnN5bi5jb20vcnNz/episode/OWU2ZTI2MmEtYTBlYS00ZTkzLTkwYzQtY2UzNWNiOTk3MDE0?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQjAg", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXYK_skznOcXsHTjrilaItgAgmjTGDYC4IRj66P7HZkX-0mGh", type: "article"},
    { title: "EP4: Award-winning Author & Occupational Psychologist, Fiona Murden", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5hY2FzdC5jb20vcHVibGljL3Nob3dzLzYzZTExZmE1MDA5MWFmMDAxMTJkMjFiYQ/episode/QnV6enNwcm91dC03NDU5MDI0?sa=X&ved=0CAUQkfYCahgKEwiIx_nFsZ2AAxUAAAAAHQAAAAAQrwc", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReFXTMrTLGtEyN8y7iPOFpf7dHGlQX-kRyCmSk5ZfIJbu5Ua-3", type: "article" },
    { title: "939: Flying with Confidence: Practical Steps to Overcome Your Fear", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbnhpZXR5Y29hY2hlcy5saWJzeW4uY29tL2FueGlldHljb2FjaGVz/episode/ZjkxOTA1ODYtMTgyYy0xMWVlLTg3OTUtOTc4Yzc3ZmFmMjBk?sa=X&ved=0CAIQuIEEahcKEwiYyNWvoZOAAxUAAAAAHQAAAAAQLA", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJxdSZFhKCgjjZaHdgAI73xfBm8b9H5FB4S2QC4cahuGqAp38", type: "article" },
    { title: "How to Let Go of Coping Mechanisms That Don’t Serve You", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMjc3MWMzYy9wb2RjYXN0L3Jzcw/episode/MTdlZjE1M2UtNzk4Yy00NTM2LTliZmQtM2Q0M2Q5Njc2NDFm?sa=X&ved=0CAUQkfYCahgKEwjIw8nK-IyAAxUAAAAAHQAAAAAQ0Do", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTc5PVrBpaqpmCFf_pEKjLJiBEMVslJX_vsdUdyCwSJcpQRnWU", type: "article"},
    {title: "How to make stress your friend", url: "https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBTsd62gj_GfMzkkEJCNLsGbFdqACH2amVJ-KqjGABd1rtiMs-ma1d86Q72cQftPCLvU&usqp=CAU", type: "video"},
    {title: "The power of vulnerability", url: "https://www.ted.com/talks/brene_brown_the_power_of_vulnerability", image: "https://thehive.com.vn/wp-content/uploads/2019/11/TED-Talk-Screening_-%E2%80%9CThe-power-of-vulnerability-%E2%80%9D.png", type: "video"},
    {title: "Getting to Know Your Brain: Dealing with Stress", url: "https://youtu.be/sTpo1FuYQ9I", image: "https://i.ytimg.com/vi/sTpo1FuYQ9I/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARg6IFQofzAP&rs=AOn4CLDfXqjCFN8UwO9WtJ0DfwXs4ysMtg", type: "video"},
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

function updateRecommendedList(category) {
  const recommendedList = document.getElementById("recommended-list");
  recommendedList.innerHTML = ""; // Clear existing recommended content

  const randomRecommended = getRandomRecommended(category, 3); // Display 3 recommended contents
  randomRecommended.forEach((item) => {
    const recommendedItem = document.createElement("li");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-item-container"); // Apply CSS styling as needed

    const contentLink = document.createElement("a");
    contentLink.href = item.url;

    if (item.type === "video") {
      const videoLink = document.createElement("a");
      videoLink.href = item.url;
      videoLink.target = "_blank"; // Open the link in a new tab

      const videoTitle = document.createElement("span");
      videoTitle.textContent = item.title; // Display the title for video type
      videoLink.appendChild(videoTitle);

      const videoIcon = document.createElement("span");
      videoIcon.textContent = "📹"; // Display the 📹 icon for videos
      videoLink.appendChild(videoIcon);



      contentContainer.appendChild(videoLink);

    } else if (item.type === "blog") {
      const blogContainer = document.createElement("div");
      blogContainer.classList.add("blog-container");
      blogContainer.dataset.category = category;
      blogContainer.id = `blog${category}${item.id}`; // You can add an ID based on your data
      blogContainer.onclick = () => selectContent(category, item.id);

      const blogLink = document.createElement("a");
      blogLink.href = item.url;
      blogLink.textContent = item.title;
      blogLink.dataset.category = category;
      blogLink.target = "_blank";
      blogLink.classList.add("blog-link");

      const blogDescription = document.createElement("p");
      blogDescription.textContent = item.description;

      blogContainer.appendChild(blogLink);
      blogContainer.appendChild(blogDescription);
      contentContainer.appendChild(blogContainer);
    } else {
      const podcastContainer = document.createElement("div");
      podcastContainer.classList.add("podcast");
      podcastContainer.id = `pd${category}${item.id}`; // You can add an ID based on your data

      const podcastLink = document.createElement("a");
      podcastLink.href = item.url;
      podcastLink.target = "_blank"; // Open the link in a new tab

      const podcastImage = document.createElement("img");
      podcastImage.src = item.image;
      podcastImage.alt = item.title; // Add alternative text for accessibility
      podcastLink.appendChild(podcastImage);

      const podcastTitle = document.createElement("p");
      const podcastTitleLink = document.createElement("a");
      podcastTitleLink.href = item.url;
      podcastTitleLink.classList.add("content-link");
      podcastTitleLink.dataset.category = category;
      podcastTitleLink.textContent = item.title;
      podcastTitle.appendChild(podcastTitleLink);

      podcastContainer.appendChild(podcastLink);
      podcastContainer.appendChild(podcastTitle);
      contentContainer.appendChild(podcastContainer);
    }

    recommendedItem.appendChild(contentContainer);
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

    const videoIcon = document.createElement("span");
    videoIcon.textContent = "📹"; // You can use any other icon or image for videos
    recommendedItem.appendChild(videoIcon);

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
