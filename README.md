# Vison-WoC-Frontend
Repository for Vison Frontend for Winter of Code 2019.

## Current Scenario!

There are millions of pages on the web, all ready to present the information on a variety of interesting and amusing topics. The Search Engines are the messengers of the same information at your disposal whenever you need them. Well, if you go by the technical definition as quoted by [Wikipedia](https://en.wikipedia.org/wiki/Web_search_engine):
“A web search engine is a software system that is designed to search for information on the World Wide Web. The search results are generally presented in a line of results often referred to as search engine results pages (SERPs)”

### The working

Every Search Engines use different complex mathematical algorithms for generating Search Results. Different Search Engines perceive different elements of a web page including page title, content, meta description and then come up with their results to rank on.
The 3 main functions of a Search Engine are:

1. Crawling: A crawler is a Search Engine bot or a Search Engine spider that travels all around the web looking out for new pages ready to be indexed.
2. Indexing: Once the Search Engines crawls the web and comes across the new pages, it then indexes or stores the information in its giant database categorically.
3. Providing information: Whenever a user types in his/her query and presses the enter button, the Search Engines would quest its directory of documents/information (that has already been crawled and indexed) and come back with the most relevant and popular results.

### Why Vison?

These search engines help with searching through words or phrases but what if you could search with a picture or a short video clip?? Won't that be cool.

The Code Foundation is going all out with "The Vison" which enables quick search through images, audio and video.

1. Our especially designed crawler program will travel all over the web and download multimedia(images, videos etc) contents on our servers.
2. We will then index based on various techniques to collect, parse and store the data to facilitate fast and accurate information retrival. 
3. As per the search query Vison would look into it's indexed data and as per the ranking of the content throw back the most relevant and popular results.

### To-Do  (Ideas) 

The frontend will be the interface for our users to search web via image. 

![](E:\Vison-WoC-Frontend\images\frontend2.png)

- [ ] `Link`, `Upload`, `Camera`, `Video`, `Seach Button`, `Settings`, `Location`  are all buttons with specific purpose which will belisted below. `Javascript` is required here. We don't have any `js` script yet. So it's up to the participants. 
- [ ] `Link`: Should be able to take any image URL and send it to the `flask` backend. 
- [ ] `Upload`: Should be able to upload the image from the local file folder. Thus it will be a form to upload image file and send to the `flask` backend. The size of the file is to be considered.
- [ ] `Camera`: Should be able to capture the image via web-cam if available. 
- [ ] `Video`: Should be able to upload the video from the local file folder. Thus it will be a form to upload video file and send to the `flask` backend. The size of the file is to be considered. (We are not considering this for WoC-19)
- [ ] `Search Button`: The user will type in the search query or use any of the mentioned buttons to either link, upload or capture image. The search button will request the server to return with relevant data. 
- [ ] `Location`: This will show the current location of the user. Just the state and country is required. If possible it should be done on the client side itself. 
- [ ] `Setting`: Coming Soon.

Happy Searching :D