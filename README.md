# identity-site

The static marketing site for login.gov

## Branches

1. `production` branch is published publicly at https://www.login.gov.
2. `master` branch is published at a preview URL

## Publishing Workflow

- Branch off of `master` and make pull requests back to the `master` branch
- When ready to publish, push changes to `production`

## Development

This is a Jekyll-built static site. To install dependencies:

```
make setup
```


To run locally in conjunction with [`identity-style-guide`](https://github.com/18F/identity-style-guide/), run the following commands:

0. In the `identity-style-guide` directory, run `npm link`. This will create a symlink that will make changes to this repo accessible in `identity-site`

Then, to start serving the site locally in development:

```
make run
```

This will start multiple processes that will watch for changes in your local `identity-style-guide` repository.

To run specs:

```
make test
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
