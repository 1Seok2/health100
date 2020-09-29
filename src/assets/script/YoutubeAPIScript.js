const YoutubeAPIScript = () => {
  const script = document.createElement('script');

  script.src = 'https://www.youtube.com/player_api';
  script.async = true;

  document.body.appendChild(script);
};

export default YoutubeAPIScript;
