var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-doenet-iframe",
  "level": "1",
  "url": "section-doenet-iframe.html",
  "type": "Section",
  "number": "1.1",
  "title": "Hosted Doenet iframe",
  "body": " Hosted Doenet iframe   Doenet: Sketching derivatives    "
},
{
  "id": "figure-doenet-iframe",
  "level": "2",
  "url": "section-doenet-iframe.html#figure-doenet-iframe",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Doenet: Sketching derivatives   "
},
{
  "id": "section-doenet-interactive",
  "level": "1",
  "url": "section-doenet-interactive.html",
  "type": "Section",
  "number": "1.2",
  "title": "DoenetML in PreTeXt source",
  "body": " DoenetML in PreTeXt source   Doenet: an empty graph    "
},
{
  "id": "figure-doenet-interactive",
  "level": "2",
  "url": "section-doenet-interactive.html#figure-doenet-interactive",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Doenet: an empty graph   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
