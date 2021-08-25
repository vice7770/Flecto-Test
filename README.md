# Rnters Frontned coding exercise

**TL;DR:** Recreate, using whichever technology (or combination of technologies), our existing "search-bar"

![Screenshot 2021-08-25 at 11 01 10](https://user-images.githubusercontent.com/2313592/130771676-6d6374c5-75c0-4ce8-87aa-66368c79b860.png)

## Objectives

We would like to challenge you to recreate, and even improve upon, our existing search-bar component (you can see it working [here](https://rnters.com)) whilst supporting it's existing set of behaviours;

What we **will** be evaluating:

- Overall code quality;
- Code breakdown/organization;
- Performance of the final solution;
- What common best practices you adhere to;
- Presence or absence of testing suites;
- Presence or absence of any `a11y` concerns (if applicable);
- Presence or absence of any `i18n` concerns (if applicable);
- Presence or absence of any `l10n` concerns (if applicable);
- Presence or absence of any type of documentation;

What we **will not** be evaluating:

- Quality of the designs produced (if you choose to stray away from the existing one); *
- How close or "pixel-perfect" your solution is with the existing solution (although we expect it to work on both Desktop & Mobile);
- How fast you can execute and deliver this exercise - Done **is not** better than perfect;

Bonus points for:

- Producing a working solution with either `Backbone`, `Ember`, `React` or `Next`
- Producing a demonstrably better UX;
- Producing a demonstrably better design;

## Notes & Resources

**No boilerplate code?! What gives?**

This is your time to shine, we don't want to pigeonhole or lock you down into an existing mindset, framework or working methodology.

**When is the exercises' deadline?**

THere isn't one.

**How about plugins, existing (external) component usage?**

As we do not set a deadline for the delivery of your solution we strongly encourage you to minimize, as much as you see fit, the usage of external dependencies/libraries or plugins - although we value how well you can work within a framework "ecosystem" we need to be able you evaluate your coding skills;
The exception here is for the calendar component/view - feel free to resort to the solution you are most confident/comfortable with.

### Useful APIs

Feel free to use dummy data, but you can also use our existing autocomplete API to retreive search result hints:

The API:

```shell
$ curl https://app.rnters.com/api/items/search?autocomplete=true&q=<YOUR QUERY HERE>
```

Usage:

```shell
$ curl https://app.rnters.com/api/items/search?autocomplete=true&q=gopro
```

Will return:

```json
["GoPro Hero 3","GoPro Hero 9","GoPro Hero 4 Silver","GoPro","GOPRO 3"]
```

## Delivery

The best way to share your code with us through a public Github repository, but if you prefer any other method of delivery just let us know and be sure we have all the necessary instructions as to be able to build and run your solution;

## Design Overview
![Screenshot 2021-08-25 at 11 01 28](https://user-images.githubusercontent.com/2313592/130771680-4870f1f2-a032-4893-a02b-9670fce949e8.png)

### Open filters
![Screenshot 2021-08-25 at 11 01 40](https://user-images.githubusercontent.com/2313592/130771681-bddd1972-49d6-430a-9028-3bd29d51f674.png)

### Location filter detail
![Screenshot 2021-08-25 at 11 01 58](https://user-images.githubusercontent.com/2313592/130771682-eb82e10d-be1b-43e7-9b75-e192fa389642.png)

### Date filter detail
![Screenshot 2021-08-25 at 11 02 14](https://user-images.githubusercontent.com/2313592/130771684-2c7a74b0-2ac0-4df1-b047-29eba4490309.png)

