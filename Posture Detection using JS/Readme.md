# Posture Detection using PoseNet

• Pose estimation refers to computer vision techniques that detect human figures in images and video, so that one could determine, for example, where someone’s elbow shows up in an image. To be clear, this technology is not recognizing who is in an image — there is no personal identifiable information associated to pose detection. The algorithm is simply estimating where key body joints are.

• At a high level pose estimation happens in two phases:

  1. An input RGB image is fed through a convolutional neural network.
  2. Either a single-pose or multi-pose decoding algorithm is used to decode poses, pose confidence scores, keypoint positions, and keypoint confidence scores from the model outputs.

• PoseNet is a pre-trained CNN model from ml5.js library in JavaScript that can detect human figures in images and videos using either a single-pose or multi-pose algorithm, all from within the browser. It provides a total of 17 key-points: 5 in the face and 12 in the body.

• ml5.js is a high level library built on the top of Tensorflow.js that makes it easier to program neural networks in the browser.

• The ml5.js library is built on the top of tensorflow.js library that inherits the functions and methods from the deep learning library.

• You can directly launch the project in your web browser.
