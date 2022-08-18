# Async Handler

This Package is for handled async response Api.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install async-handler-express.

```bash
npm install async-handler-express
```
---
title: "your title"
excerpt: "brief description of page contents that show up on previews"
---

```python
const { errorHandler }=require('async-handler-express');

#use this middleware end of routes
app.use(errorHandler());


```


## Usage

```python
const { catchAsync }=require('async-handler-express');

app.get('/',catchAsync(async()=>{
     await Promise().....
}));


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
