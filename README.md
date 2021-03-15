![show-n-tell](hear.gif)

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

## Post Mortem

I decided to take some liberties with the proposed design that I think improve the UX. Normally I'd have a discussion with the design team prior to implementing these changes. 

### Design Liberties

- Co-locate the delete button with the user to make it easier to visually couple the act of deleting a comment with the correct user/comment pair
- Add a two click confirmation to reduce accidental deletes
- Add an app-wide header to create a more cohesive user experience
- Reduce opacity of non-critical elements to improve readability

### Bonus Material

- Add app router to showcase my experience in larger app architecture
- Add lazy loading to disparate pages/modules
- Deep linking to post comments and users profiles
- Rough in the ability to collapse comment threads
- Built with responsiveness in mind

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
