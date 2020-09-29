const AiScript = () => {
  const script1 = document.createElement('script');
  const script2 = document.createElement('script');

  script1.src =
    'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js';
  script1.async = true;

  script2.src =
    'https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js';
  script2.async = true;

  document.body.appendChild(script1);
  document.body.appendChild(script2);
};

export default AiScript;
