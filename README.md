<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Gtallant/tabletop-manager">
    <img src="public\Logo_256.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Tabletop Manager</h3>

  <p align="center">
    A simple portal for Tabletop RPGs
    <br />
    <a href="https://github.com/Gtallant/tabletop-manager"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://tabletop-manager.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Gtallant/tabletop-manager/issues">Report Bug</a>
    ·
    <a href="https://github.com/Gtallant/tabletop-manager/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Tabletop Manager][product-screenshot]](https://tabletop-manager.vercel.app/)

I run a tabletop RPG campaign for my family hosted over discord, and I wanted a way to synchronously play an mp3 file on everyone's devices. After trying out a few tools that didn't work for various reasons, I decided to just write a simple webapp to do it via websockets.

I also want it to be generic enough that if I ever want to add more features, I can without having to do much refactoring.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [MUI](https://mui.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Airtable](https://airtable.com/)
* [Socket.io](https://socket.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Gtallant/tabletop-manager.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run in development mode
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage

This is a project intended 

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

- [ ] Synchronously play an audio file across multiple clients
- [ ] Display character info
    - [ ] Change layout based on if we're in/out of combat
- [ ] Display Stat blocks for monsters/NPCs
    - [ ] Parse stats from an image of a stat block

See the [open issues](https://github.com/Gtallant/tabletop-manager/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [Linkedin](https://www.linkedin.com/in/griffintallant/) - griffin.tallant@gmail.com

Project Link: [https://github.com/Gtallant/tabletop-manager](https://github.com/Gtallant/tabletop-manager)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Gtallant/tabletop-manager.svg?style=for-the-badge
[contributors-url]: https://github.com/Gtallant/tabletop-manager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/tabletop-manager.svg?style=for-the-badge
[forks-url]: https://github.com/Gtallant/tabletop-manager/network/members
[stars-shield]: https://img.shields.io/github/stars/Gtallant/tabletop-manager.svg?style=for-the-badge
[stars-url]: https://github.com/Gtallant/tabletop-manager/stargazers
[issues-shield]: https://img.shields.io/github/issues/Gtallant/tabletop-manager.svg?style=for-the-badge
[issues-url]: https://github.com/Gtallant/tabletop-manager/issues
[license-shield]: https://img.shields.io/github/license/Gtallant/tabletop-manager.svg?style=for-the-badge
[license-url]: https://github.com/Gtallant/tabletop-manager/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/griffintallant/
[product-screenshot]: public/screenshot.jpg
