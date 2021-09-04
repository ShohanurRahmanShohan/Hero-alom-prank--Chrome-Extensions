let image = [
  "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02L_6pJ5IDf_s7XnSNWigD8NNIGXmlY_RZPQo5XqpMrGU_ocdES5VtDdu&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgN67CLiEp7s82EP4RuKH97IlzEZmZL4L7fB1HI6wGipUKE8LCVbB1Lk&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv2X7pjTrNjL7dz-7jxrY0M4KpffahdKvDty9rfbex7l0RHYOxvoo5kmb&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMC0BpZJKCFJqBiKLYULDejjgpmFLSYYTTMQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYirwcif0imnrOqX6f8Gb_kn4Xn8rB0tAG7g&usqp=CAU",
  ];
  const imgs = document.getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    const randomimg = Math.floor(Math.random()*image.length);
    imgs[i].src=image[randomimg];
  }
  