# KOI for ConquerCancer.ca

This web application was created for participants of "The Ride to Conquer Cancer" - www.conquercancer.ca

# Angular CLI Commands 

Below you will find helpful Angular CLI Commands we have used on this project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Shorthand codes:
You may also run `ng g c YOUR-COMPONENT-NAME` to generate a new component. Add `--no-spec` flag after `YOUR-COMPONENT-NAME` if you do not require a spec/testing file to be included.

Other commands include:

Run `ng g s YOUR-SERVICE-NAME` as a shorthand to generate services on the fly. You may also add the `--no-spec` flag to generate the service without a testing/spec file. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `ng build --watch` to watch for constant changes and build the project on the fly.

### For production build:

Run `ng build --env=prod` to build for production.

Run `ng build --env=prod --watch` to build for production on the fly.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Mock Data & Development Mode

### Mock Login Credentials

For development without MongoDB, the application supports mock authentication using credentials stored in the `.env` file:

**Default Mock Credentials:**
- **Email:** `admin@koi.com`
- **Password:** `koi2025`

These credentials are defined in `.env`:
```
MOCK_USER_EMAIL=admin@koi.com
MOCK_USER_PASSWORD=koi2025
MOCK_USER_FIRSTNAME=Koi
MOCK_USER_LASTNAME=Admin
MOCK_USER_ID=mock-user-12345
```

**Security Note:** Mock credentials are for development only. Never commit real user credentials to `.env` or version control.

### Mock API Data

The application includes comprehensive mock data for all events:
- **Toronto RTCC** (2017-2020)
- **Montreal RTCC** (2017-2020)
- **Alberta RTCC** (2017-2020)
- **Vancouver RTCC** (2017-2020)
- **OneWalk Toronto** (2017-2020)
- **Perth RTCC** (2017-2018)
- **Melbourne One Day** (2017-2018)
- **Brisbane One Day** (2017-2018)

### Locale Filtering

The application supports filtering data by locale. Available API endpoints:

- `GET /api/data` - Returns all event data
- `GET /api/locales` - Returns metadata for all available locales
- `GET /api/data/:locale` - Returns filtered data for a specific locale (e.g., `/api/data/toronto`)

### Table Display Options

After logging in, you can view:
- **All Tables** - Display data from all events
- **Individual Locale Tables** - Filter by Toronto, Montreal, Alberta, Vancouver, Perth, Melbourne, Brisbane, or OneWalk Toronto

Use the table menu buttons in the header to switch between different locale views.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

You may also contact the development team at CauseForce for further help.

## Developed By: 

Baokhoa Vu

For more information about CauseForce visit http://www.causeforce.com/

For more information on "The Ride to Conquer Cancer" visit http://www.conquercancer.ca
