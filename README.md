[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/6CCS3PRJ/caching-function">
    <img src="docs/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Caching Fu</h3>

  <p align="center">
   Serverless function for AWS that calls a endpoint in <a href="https://github.com/6CCS3PRJ/server">server</a>. Developed as part of <a href="https://github.com/danilo-delbusso"><b>@danilo-delbusso</b></a>'s a final year project
    <br />
    <a href="https://github.com/6CCS3PRJ/caching-function/issues">Report Bug</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

The project contains a simple AWS lambda function that invokes an endpoint to start the caching process for feature statistics calculation.

It does not implement authentication, since the REST API does not contain any.


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Installation for this project are described for linux. For other operating systems, please refer to the links provided.

* [Node.js](https://nodejs.org/en/)
* [npm](http://npmjs.com/)

It is suggested to install Node.js and npm using [nvm](https://github.com/nvm-sh/nvm#install--update-script).

### Installation

To install, first clone the repository

```zsh
git clone https://github.com/6CCS3PRJ/caching-function.git
```

There are no dependencies

The function is built to be invoked by AWS lambda. You can call it manually by calling the `startRequest` function in `index.js`.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/6CCS3PRJ/caching-function/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create.


The repo itself is just used to show the project. It is **NOT** actively maintained. The author suggests forking the project instead of opening new issues.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Danilo Del Busso - [@danilo_delbusso](https://twitter.com/danilo_delbusso)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/6CCS3PRJ/caching-function.svg?style=for-the-badge
[contributors-url]: https://github.com/6CCS3PRJ/caching-function/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/6CCS3PRJ/caching-function.svg?style=for-the-badge
[forks-url]: https://github.com/6CCS3PRJ/caching-function/network/members
[stars-shield]: https://img.shields.io/github/stars/6CCS3PRJ/caching-function.svg?style=for-the-badge
[stars-url]: https://github.com/6CCS3PRJ/caching-function/stargazers
[issues-shield]: https://img.shields.io/github/issues/6CCS3PRJ/caching-function.svg?style=for-the-badge
[issues-url]: https://github.com/6CCS3PRJ/caching-function/issues
[license-shield]: https://img.shields.io/github/license/6CCS3PRJ/caching-function.svg?style=for-the-badge
[license-url]: https://github.com/6CCS3PRJ/caching-function/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/danilo-delbusso/