[![Release][release-shield]][release-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/wifi-tracing/caching-function">
    <img src="docs/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Caching Function</h3>

  <p align="center">
   Serverless function for AWS that calls a endpoint in <a href="https://github.com/wifi-tracing/server">server</a>. Developed as part of <a href="https://github.com/danilo-delbusso"><b>@danilo-delbusso</b></a>'s a final year project
    <br />
    <a href="https://github.com/wifi-tracing/caching-function/issues">Report Bug</a>
  </p>
</p>


# ℹ About The Project

The project contains a simple AWS lambda function that invokes an endpoint to start the caching process for feature statistics calculation.

It does not implement authentication, since the REST API does not contain any.

# 💽 Installation

To install, first clone the repository

```zsh
git clone https://github.com/wifi-tracing/caching-function.git
```

Then install dependencies by using

```zsh
npm install
```

The function is built to be invoked by AWS lambda. You can call it manually by calling the `startRequest` function in `index.js`.

<!-- ROADMAP -->
# 🗺 Roadmap

See the [open issues](https://github.com/wifi-tracing/caching-function/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
# 💁 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create.


The repo itself is just used to show the project. It is **NOT** actively maintained. The author suggests forking the project instead of opening new issues.

<!-- LICENSE -->
# ⚖ License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
# 🐦 Contact

Danilo Del Busso - [@danilo_delbusso](https://twitter.com/danilo_delbusso)

# 🙏 Attributions

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[release-shield]: https://img.shields.io/github/v/release/wifi-tracing/caching-function?style=for-the-badge
[release-url]: https://github.com/wifi-tracing/caching-function/releases
[forks-shield]: https://img.shields.io/github/forks/wifi-tracing/caching-function.svg?style=for-the-badge
[forks-url]: https://github.com/wifi-tracing/caching-function/network/members
[stars-shield]: https://img.shields.io/github/stars/wifi-tracing/caching-function.svg?style=for-the-badge
[stars-url]: https://github.com/wifi-tracing/caching-function/stargazers
[issues-shield]: https://img.shields.io/github/issues/wifi-tracing/caching-function.svg?style=for-the-badge
[issues-url]: https://github.com/wifi-tracing/caching-function/issues
[license-shield]: https://img.shields.io/github/license/wifi-tracing/caching-function?style=for-the-badge
[license-url]: https://github.com/wifi-tracing/caching-function/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/danilo-delbusso/
