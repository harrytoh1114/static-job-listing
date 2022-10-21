# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: (https://github.com/harrytoh1114/static-job-listing)
- Live Site URL: (https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Desktop-first workflow
- SCSS
- React Redux
- [React](https://reactjs.org/) - JS library

### What I learned

I had learned how to compare items within two arrays. I had also implement Redux to get the user input of filter parameters and subsequently render the result for the user. I made use of my SCSS to style my component and it really reduced the complexity of styling.

```js
  useEffect(() => {
    var resultArr = [];
    for (var i = 0; i < data.length; i++) {
      const dataFilter = [];
      dataFilter.push(data[i].role, data[i].level, ...data[i].language, ...data[i].tools)

      if (filter.every((f) => dataFilter.indexOf(f) > -1)) {
        resultArr.push(data[i]);
      }
    }
    setFilterResult(resultArr);
  }, [filter]);
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

## Author

- Frontend Mentor - [@harrytoh1114](https://www.frontendmentor.io/profile/harrytoh1114)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
