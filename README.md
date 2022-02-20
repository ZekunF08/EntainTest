# EntainTest

# Coding Skills Challenge

###

Author: Zekun Fang

Date: 20/02/2022

### Business Requirement:

- Create a single page application that displays 'Next to go’ races using our API.
  A user should see 5 races at all times, and they should be sorted by time ascending.
- Race should disappear from the list after 1 min past the start time (advertised_start).
- User should see meeting name (meeting_name), race number (race_number) and
  countdown timer that indicates the start of the race.
- User should be able to toggle race categories to view races belonging to only the selected category.

### Assumptions:

Here are the assumptions made:

1. The maximum number of races is 10 at one time.
2. The app will display 5 or less when specific category is selected (e.g. user only want to see greyhound games and there is only one match in the next 10 games so user would only see one match displayed)
3. There is no other categories of races in the coming races.

### Install:

1.  Please make sure you have React Native installed
2.  Please make sure you have Yarn or Npm installed
3.  Please make sure you have iOS or Andorid device configured
4.  #### via npm:

    Run `npm install`

    #### via yarn:

    Run `yarn install`

5.  Make sure you have pod installed
    Run `cd ios && pod install`

### Usage:

#### For iOS:

    Run `yarn ios`

#### For android :

     Run `yarn android`

After run the above code you should see the app running on the device

For any questions feel free to reach out: zekun.fang08@gmail.com

### Unit Test:

#### via npm:

    Run `npm test`

#### via yarn:

    Run `yarn test`
