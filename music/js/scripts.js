document.addEventListener("DOMContentLoaded", function() {
    // Example code to demonstrate interaction
    const featuredMusicSection = document.getElementById('featured-music');
    const trendingMusicSection = document.getElementById('trending-music');

    // Example: Add featured music dynamically (replace with actual data)
    const featuredMusic = [
        { title: "Song 1", artist: "Artist 1", genre: "Genre 1", filePath: "uploads/music/song1.mp3" },
        { title: "Song 2", artist: "Artist 2", genre: "Genre 2", filePath: "uploads/music/song2.mp3" }
    ];

    featuredMusic.forEach(music => {
        const musicItem = document.createElement('div');
        musicItem.classList.add('music-item');
        musicItem.innerHTML = `
            <h3>${music.title}</h3>
            <p>Artist: ${music.artist}</p>
            <p>Genre: ${music.genre}</p>
            <a href="${music.filePath}" download>Download</a>
            <a href="music_details.html?file=${music.filePath}">Details</a>
        `;
        featuredMusicSection.appendChild(musicItem);
    });

    // Example: Add trending music dynamically (replace with actual data)
    const trendingMusic = [
        { title: "Song A", artist: "Artist A", genre: "Genre A", filePath: "uploads/music/songA.mp3" },
        { title: "Song B", artist: "Artist B", genre: "Genre B", filePath: "uploads/music/songB.mp3" }
    ];

    trendingMusic.forEach(music => {
        const musicItem = document.createElement('div');
        musicItem.classList.add('music-item');
        musicItem.innerHTML = `
            <h3>${music.title}</h3>
            <p>Artist: ${music.artist}</p>
            <p>Genre: ${music.genre}</p>
            <a href="${music.filePath}" download>Download</a>
            <a href="music_details.html?file=${music.filePath}">Details</a>
        `;
        trendingMusicSection.appendChild(musicItem);
    });

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle login logic
        });
    }

    // Handle registration form submission
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle registration logic
        });
    }

    // Handle music upload form submission
    const uploadMusicForm = document.getElementById('upload-music-form');
    if (uploadMusicForm) {
        uploadMusicForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle music upload logic
        });
    }

    // Handle comment form submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle comment logic
        });
    }

    // Handle rating submission
    const ratingInput = document.getElementById('rating-input');
    const submitRatingButton = document.getElementById('submit-rating');
    if (ratingInput && submitRatingButton) {
        submitRatingButton.addEventListener('click', function() {
            const rating = ratingInput.value;
            // Handle rating logic
        });
    }
});
