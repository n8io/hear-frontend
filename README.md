# hear-frontend

## Prerequisites

- NodeJs v14.16.0
- Yarn v1.22.5
- MacOS Catalina

NOTE: While this app can probably run on older versions of the aforementioned dependencies,
only the listed versions were validated during development.

## Getting Started

1. Install dependencies

```shell
git clone git@github.com:n8io/hear-frontend.git
cd hear-frontend
yarn
```

2. Start the app

```shell
yarn start
```

3. Open your browser to [the post page](http://localhost:3000/r/unpopularopinion/posts/abc123)

## Running Tests

```shell
yarn test:ci
```

## Watch Tests
```shell
yarn test
```


## TODOs

- [x] Sort comments asc/desc
- [ ] Cleanup some responsive display quirks
- [ ] Leverage a UI library for base theming & low level components
- [ ] Add expand/collapse functionality to comment threads
- [ ] I18n
- [ ] Persist comment deletion to a backend
- [ ] Persist user settings (comments sort order)
- [ ] Add a CI/CD pipeline
- [ ] A boatload of other functionality that I decided to shelve in order to deliver
