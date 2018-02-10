# BKKSS Alumni Website

## To update the website data
You should only modify the json files in the www/json folder.

### www/json/news.json

- id - unique integer
- title - string
- content - an array of {label: "string", link: "string"}
- type (0 - title, 1 - title + content)
- date (obtained from http://coderstoolbox.net/unixtimestamp/)

### www/json/news.json Example
```json
{
  "id": 28,
  "title": "2018 校友會會員大會",
  "content": [
    {
      "label": "詳情",
      "link": "files/28/general-meeting-2018.pdf"
    }
  ],
  "type": 1,
  "date": "2018-01-12T15:31:24.063Z"
}
```

### www/json/members.json

- name - string
- image - string
- members - an array of {"chinese": "string", "english": "string", "year": "integer", "position": "string"}

### www/json/members.json Example
```json
{
  "name": "第六屆幹事",
  "image": "images/members/6.jpg",
  "members": [
    {
      "chinese": "古家麗",
      "english": null,
      "year": 2014,
      "position": "會長"
    },
    {
      "chinese": "蔡文建",
      "english": null,
      "year": 2014,
      "position": "內務副會長"
    }
  ]
}
```

### www/json/galleries.json

Add a new folder in www/images/galleries in the following format
```
www/images/galleries/{EVENT_NAME} ( {YEAR} )
```

Go To
```
www/images/galleries/
```

You will see
```
Galleries Generator.exe
```

Run it for a while, there should be a new 
```
galleries.json
```

Replace the old one in 
```
www/json/
```

## To develop the website

Install the dependency
```
npm install
npm install -g gulp
```

Modify the source code in
```
development
```

Test the website
```
npm run start
```


