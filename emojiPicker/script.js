const emojis = document.querySelectorAll('.emoji');
    const notification = document.getElementById('notification');

    emojis.forEach(emoji => {
      emoji.addEventListener('click', () => {
        const emojiText = emoji.textContent;
        navigator.clipboard.writeText(emojiText).then(() => {
          notification.style.display = 'block';
          setTimeout(() => {
            notification.style.display = 'none';
          }, 2000);
        });
      });
    });