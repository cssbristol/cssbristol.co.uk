# Computer Science Society - University of Bristol

[![Netlify Status](https://api.netlify.com/api/v1/badges/908c1c40-dcf1-4f63-95ee-d28ca1dbe989/deploy-status)](https://app.netlify.com/sites/cssbristol/deploys)
[![Scheduled Build and deploy jekyll site to Netlify](https://github.com/cssbristol/cssbristol.github.io/actions/workflows/netlify-deployment.yml/badge.svg)](https://github.com/cssbristol/cssbristol.github.io/actions/workflows/netlify-deployment.yml)

## Overview

This repository contains the code for the University of Bristol Computer Science Society website, [cssbristol.co.uk](http://www.cssbristol.co.uk/).

The site is built using [Jekyll](https://jekyllrb.com/), a static site generator. If you want to get Jekyll running locally, GitHub provides [some instructions](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).

When a commit is made to `master`, GitHub will automatically rebuild the site and the updated version will start being served to users.

If you have comments or questions, there are lots of ways to get in touch:

- Email [webmaster@cssbristol.co.uk](mailto:webmaster@cssbristol.co.uk)
- Create an issue
- Find a committee member in person

## Contributing

### Blog posts and tutorials

We would love to add your content to the site! If you think you can contribute a tutorial or a blog post, have a read of [the instructions](https://cssbristol.co.uk/tutorials/post-on-the-site/) and submit a pull request with your content.

### New features

We're all ears for any ideas that you might have. If you want to write it yourself, let us know and we'll see if we can help out. If you just want to submit a feature request or idea, create an issue.

### Build & Run

#### Pre-requisites

- Install [Git](https://git-scm.com/downloads).
- Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
- Install [Bundler](http://bundler.io/) by running `gem install bundler`.

#### Acquiring and building the project

- Fork the project on GitHub.
- Clone your fork, e.g. `git clone https://github.com/<username>/cssbristol.github.io`
- `bundle install` to install all dependencies (Ruby gems).
- `bundle exec jekyll build` to build the site.
- `bundle exec jekyll serve`, then view site at [http://localhost:4000/](http://localhost:4000/)

## Roadmap

- [x] Add a jobs section
- [ ] Add outreach information
- [ ] Add sports information
- [x] Add sponsorship tiers
- [ ] Write some more tutorials!
- [ ] Add alumni profiles
- [ ] Add information for freshers
- [ ] Links to related societies
- [ ] Add committee meeting minutes
- [ ] Add society history

## Contributors

### Developers

The initial version of the current site was designed and written by [Julian Laval](https://github.com/JulianLaval), the 2015-16 webmaster.

The site was ported to Jekyll by [Ross Gardiner](https://github.com/rossng), the 2016-17 webmaster.

The site was then maintained by: Louis Heath and then Sibela Chinareva

The site is currently maintained and updated by [Daniel Jones](https://github.com/danjones1618)

### Authors

[Ben Marshall](https://github.com/ben-marshall) - wellbeing

## License

The code and contents of this website are freely available under the [MIT License](https://raw.githubusercontent.com/cssbristol/cssbristol.github.io/master/LICENSE.md).

Jekyll, and any parts of the Jekyll default template are also available under the [MIT License](https://raw.githubusercontent.com/jekyll/jekyll/master/LICENSE).

ViewerJS is licensed under the [AGPL 3.0](https://github.com/kogmbh/ViewerJS/blob/master/AGPL-3.0.txt).

FontAwesome icons are licensed under the [SIL Open Font License 1.1](http://scripts.sil.org/OFL).
